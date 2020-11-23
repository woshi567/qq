<template>
    <div id="all">
        <div id="top"></div>
        <div id="none">
            <div>
                <img :src=img alt="">
            </div>
            <div>
                <div>
                    <span style="color:#fff;fontSize:20px;fontWeight:900;">{{user.username}}</span><br>
                    <span style="color:#fff;fontSize:13px;">昵称: 长青</span>
                </div>
                <div>
                    <span style=";fontSize:18px;">QQ:{{user.usernumber}}</span><br>
                    <span>53</span>
                </div>
            </div>
        </div>
        <div class="heng">
            <div>
                <img src="../../public/image/renxiang.png" alt="">
            </div>
            <div>
                <span>男</span><span>24岁</span>|<span>来自河南郑州</span>|<span>学生</span>
            </div>
            <div>
                <img src="../../public/image/you2.png" alt="">
            </div>
        </div>
        <div class="heng">
            <div>
                <img src="../../public/image/write.png" alt="">
            </div>
            <div>
                古语说 知耻而后勇 我 拜托大家了。
            </div>
            <div>
                <img src="../../public/image/you2.png" alt="">
            </div>
        </div>
        <div class="heng">
            <div>
                <img src="../../public/image/king.png" alt="">
            </div>
            <div>
                他还未开通任何服务
            </div>
            <div>
                <img src="../../public/image/you2.png" alt="">
            </div>
        </div>
        <div class="heng">
            <div>
                <img src="../../public/image/kongjian.png" alt="">
            </div>
            <div>
                他的qq空间
            </div>
            <div>
                <img src="../../public/image/you2.png" alt="">
            </div>
        </div>
        <div id="tou">
            <img src="../../public/image/back.png" alt="">
        </div>
        <div class="bottom" v-if="number">
            <span>音频通话</span>
            <span>送礼物</span>
            <span style="backgroundColor:#3982FF"><router-link to="text">发消息</router-link></span>
        </div> 
        <div class="bottom" v-else>
            <button @click='addfrend'>加好友</button>
        </div>
    </div>
</template>
<style scoped>
.bottom>button{
    font-size: 18px;
    color: white;
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 8px;
    background-color: rgb(41, 169, 228);
}
#tou{
    width: 100%;
    height: 50px;
    padding: 0 18px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
}
.bottom>span~span{
    margin-left: 5%;
}
.bottom>span{
    display: inline-block;
    width: 30%;
    background-color: #eee;
    border-radius: 15px;
    font-size: 20px;
    line-height: 50px;
    height: 100%;
}
.bottom{
    background-color: rgb(248, 248, 248);
    border-top: 2px solid #eee;
    padding:5px 18px;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 100%;
    margin-top: -60px;
}
.heng>div:first-child{
    width: 10%;
}
.heng>div:nth-child(2)>span{
    color: #000;
    padding: 0 5px;
}

.heng>div:nth-child(2){
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 25px;
    text-align: start;
    line-height: 60px;
    width: 80%;
}
.heng>div:last-child{
    width: 10%;
}
.heng>div:last-child>img,.heng>div:first-child>img{
    display: inline-block;
    margin: 10px 10px;
}
.heng>div{
    /* line-height: 60px; */
    height: 100%;
}
.heng{
    padding: 0 18px;
    display: flex;
    justify-content: start;
    margin-top: 45px;
    width: 100%;
    height: 60px;
}
.heng~.heng{
    margin-top: 0px;
}
#none>div:last-child>div{
    height: 50%;
}
#none>div:last-child{
    padding-left: 15px;
    text-align: start;
    height: 100%;
}
#none>div:first-child img{
    width: 100%;
}
#none>div:first-child{
    width: 90px;
    height: 90px;
    margin: auto 0;
    overflow: hidden;
    border-radius: 50%;
}
#none{
    padding: 0 18px;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 100px;
    position: fixed;
    top: 150px;
}
#top{
    width: 100%;
    height: 200px;
    background-image: url("../../public/image/personal.jpg");
    background-size: 100% 100%;
}
</style>
<script>
export default {
    data() {
        return {
            number:true,
            user:{},
            me:{},
            img:'',
        }
    },
    mounted() {
        this.me=this.qs.parse(window.sessionStorage.getItem("user"))
        if(this.$route.params.user!=undefined){
        this.user=this.$route.params.user
        this.img=require("../assets/user/"+this.user.img+".jpg")
        window.sessionStorage.setItem("personal",this.qs.stringify(this.$route.params.user))
        }else{
        this.user=this.qs.parse(window.sessionStorage.getItem("personal"))
        }
        let obj={
            myid:this.me.userid,
            frendid:this.user.userid
        }
        this.axios.get("http://127.0.0.1:9999/havefrend?"+this.qs.stringify(obj)).then(res=>{
            if(res.data==0){
                this.number=false
            }
        })
    },
    methods: {
        addfrend(){
            let obj1={
                myid:this.me.userid,
                myname:this.me.username,
                myimg:this.me.img,
                frendid:this.user.userid,
                frendname:this.user.username,
                frendimg:this.user.img,
            }
            console.log(obj1)
            this.axios.get("http://127.0.0.1:9999/addfrend?"+this.qs.stringify(obj1)).then(res=>{
                this.$router.push("lianxiren")
            })
        }
    },
}
</script>