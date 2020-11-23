<template>
    <div>
        <div id="tubiao">
            用户注册
        </div>
        <input type="text" placeholder="请输入用户名(1-6位)" maxlength="6" @blur.prevent="name">
        <input type="password" placeholder="请输入密码(6-12位)" maxlength="12" @blur.prevent="pwd">
        <input type="password" placeholder="请确认密码" @blur.prevent="pwd1">
        <br>
        <button id="bt1" v-if="i==0"></button>
        <button id="bt2" v-else @click="zhuce"></button>
       <div id="denglu">
            已有帐号，去<router-link to="/" style="color:blue">登录</router-link>
        </div>
    </div>
</template>
<style scoped>
#denglu{
    font-size: 20px;
    padding-top: 100px;
    padding-right: 10%;
    text-align: end;
}
#bt1{
    margin-top:40px ;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: #eee url("../../public/image/you.png") 50% 50% no-repeat;
}
#bt2{
    margin-top:40px ;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    outline: none;
    border: none;
    background: #25AFF3 url("../../public/image/you.png") 50% 50% no-repeat;
}
#tubiao{
    text-align: start;
    padding-left:36%;
    font-size: 40px;
    line-height: 60px;
    width: 100%;
    height: 60px;
    margin: 80px 0 30px 0;
    background: url("../../public/image/QQ.png") no-repeat 21% 50%;
    background-size: 60px 60px;
}
input{
    outline: none;
    font-size: 20px;
    border:none;
    text-align: center;
    background-color: #eee;
    height: 50px;
    border-radius: 30px;
    margin: 10px 0;
    width: 80%;
}
</style>
<script>
let input=document.getElementsByTagName("input")
export default {
    data() {
        return {
            i:0,
        }
    },
    methods: {

        name(){
            if(input[0].value.length==0){
                alert("用户名不能为空")
            }
            else{
                this.axios.get("http://127.0.0.1:9999/name?username="+input[0].value).then(res=>{
                    if(res.data==0){
                        alert("用户名重复")
                        input[0].value=''
                    }
                })
            }
        },
        pwd(){
            if(input[1].value.length<6){
                alert("密码长度不能低于6位")
                input[1].value=''
            }
        },
        pwd1(){
            if(input[2].value!=input[1].value){
                input[1].value=''
                input[2].value=''
                alert("用户密码不一致")
                this.i="0"
            }else{
                if(input[0].value.length!=0){
                    this.i="1"
                }
            }
        },
        zhuce(){
            let number=''
            let arr=[0,1,2,3,4,5,6,7,8,9]
            let img=Math.floor(Math.random()*24)+1
            for(let i=0;i<10;i++){
                number+=arr[Math.floor(Math.random()*10)]
            }
            let obj={
                number:number,
                name:input[0].value,
                pwd:input[1].value,
                img:img
            }
            this.axios.get("http://127.0.0.1:9999/zhuce?"+this.qs.stringify(obj)).then(res=>{
                if(res.data==1){
                    this.$router.push("/")
                }else{
                    alert("注册失败")
                }
            })
        }
    },
}
</script>