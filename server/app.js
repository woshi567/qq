const express=require("express")
const server=express()
// 解决跨域问题
const cors=require("cors")
const md5=require("md5")
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}))
//中间件
const bodyParser=require("body-parser")
server.use(bodyParser.urlencoded({  
    extended:false
    }))
//数据库模块
const mysql=require("mysql")
const { setTimeout } = require("timers")
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'qq',
    connectionLimit:10
})
server.listen(9999,()=>{
    console.log("服务器在运行")
})
//用户注册,注册的同时创建各种表格
server.get("/zhuce",(req,res)=>{
    let username=req.query.name
    let userpwd=md5(req.query.pwd)
    let usernumber=req.query.number
    let img=req.query.img
    let obj={"username":username,"userpwd":userpwd,"img":img,"usernumber":usernumber}
    pool.query( "insert into user set?",[obj],(err,result)=>{
        if(err)throw err
        if(result.affectedRows>0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
    //创建用户表格(好友列表，聊天记录)
    setTimeout(() => {
        pool.query("select userid from user where username=?",[username],(err,result)=>{
            if(err) throw err
            let sql=`
            create table frend_${result[0].userid}(
                id int  primary key AUTO_INCREMENT,
                userid int(10),
                othername varchar(10),
                img int(10)
            );
            `
            let sql1=`
            create table jilu_${result[0].userid}(
                id int  primary key AUTO_INCREMENT,
                userid int(10),
                str  varchar(4294967295)
            );
            `
            pool.query(sql,(err,res)=>{
                if(err) throw err
            })
            pool.query(sql1,(err,res)=>{
                if(err) throw err
            })
        })
    }, 3000);
    
})
//用户名重复检测
server.get("/name",(req,res)=>{
    let username=req.query.username
    pool.query("select*from user where username=?",[username],(err,result)=>{
        if(err) throw err
        if(result.length==0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
})
//好友检测(查看对方是否是自己好友)
server.get("/havefrend",(req,res)=>{
    let table=`frend_${req.query.myid}`
    let id=req.query.frendid
    if(id!=undefined){
        let sql=`select*from ${table} where userid=${id}`
        pool.query(sql,(err,result)=>{
            if(err) throw err
            if(result.length==0){
                res.send("0")
            }else{
                res.send("1")
            }
    })
    }else{
        let sql=`select*from ${table}`
        pool.query(sql,(err,result)=>{
            if(err) throw err
            res.send(result)
        })
    }
})
//添加好友
server.get("/addfrend",(req,res)=>{
    let table=`frend_${req.query.myid}`
    let myju=`jilu_${req.query.myid}`
    let frend={
        userid:req.query.frendid,
        othername:req.query.frendname,
        img:req.query.frendimg
    }
    let frendtable=`frend_${req.query.frendid}`
    let frendju=`jilu_${req.query.frendid}`
    let me={
        userid:req.query.myid,
        othername:req.query.myname,
        img:req.query.myimg
    }
    let sql=`insert into ${table} set ?`
    let sql1=`insert into ${frendtable} set ?`
    pool.query(sql1,[me],(err)=>{
        if(err) throw err
    })
    pool.query(sql,[frend],(err,result)=>{
        if(err) throw err
        if(result.affectedRows>0){
            res.send("1")
        }else{
            res.send("0")
        }
    })
    let sqladd=`insert into ${myju} set userid=${req.query.frendid}`
    let sqladd1=`insert into ${frendju} set userid=${req.query.myid}`
    pool.query(sqladd,(err)=>{
        if (err) throw err
    })
    pool.query(sqladd1,(err)=>{
        if (err) throw err
    })
})
//用户名模糊查询
server.get("/chaxun",(req,res)=>{
    let username=req.query.name
    pool.query(`select*from user where username like '%${username}%'`,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//登陆验证
server.post('/login',(req,res)=>{
    let username=req.body.name
    let userpwd=md5(req.body.pwd)
    let sql="select*from user where username=? && userpwd=?"
    pool.query(sql,[username,userpwd],(err,result)=>{
        if(err) throw err
        if(result.length==0){
            res.send("0")
        }else if(result.length>0){
            res.send(result)
        }
    })
})
//获取聊天记录
server.get("/getjilu",(req,res)=>{
    let table=`jilu_${req.query.myid}`
    let userid=req.query.frendid
    let sql=`select*from ${table} where userid=${userid}`
    pool.query(sql,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
//插入聊天记录
server.get("/putjilu",(req,res)=>{
    let table=`jilu_${req.query.myid}`
    let userid=req.query.frendid
    let str=req.query.value
    let sqlqq=`update ${table} set str='${str}' where userid=${userid}`
    pool.query(sqlqq,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})