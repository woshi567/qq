<template>
    <div>
        <div id="tubiao">
            QQ
        </div>
        <input type="text" placeholder="请输入用户名">
        <input type="password" placeholder="请输入密码" @blur.prevent="pwd">
        <br>
        <button id="bt1" v-if="i==0"></button>
        <button id="bt2" v-if="i==1" @click="login"></button>
        <div id="bottom">
                <div>
                    <router-link to="">忘记密码</router-link>
                </div>
                <div>|</div>
                <div>
                    <router-link to="zhuce">用户注册</router-link>
                </div>
        </div>
    </div>
</template>
<style scoped>
    #bottom{
        display: flex;
        padding:0 20px;
        justify-content: space-around;
        margin-top: 150px;
        height: 40px;
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
        padding-left:13%;
        font-size: 50px;
        line-height: 60px;
        width: 100%;
        height: 60px;
        margin: 80px 0 30px 0;
        background: url("../../public/image/QQ.png") no-repeat 33% 50%;
        background-size: 60px 60px;
    }
    input{
        width: 80%;
        background-color: #eee;
        height: 60px;
        outline: none;
        border: none;
        border-radius: 30px;
        margin: 10px auto;
        font-size: 20px;
        text-align: center;
    }
</style>
<script>
import { MessageBox } from 'mint-ui'
let input=document.getElementsByTagName("input")
export default {
    data() {
        return {
            i:0,
        }
    },
    methods: {
        pwd(){
            if(input[0].value!='' && input[1].value!=''){
                this.i=1
            }
        },
        login(){
            let obj={
                name:input[0].value,
                pwd:input[1].value
            }
            this.axios.post("http://127.0.0.1:9999/login",this.qs.stringify(obj)).then(res=>{
                if(res.data==0){
                    alert("用户不存在或密码错误")
                    input[1].value=''
                }else{
                    window.sessionStorage.setItem("user",this.qs.stringify(res.data[0]))
                    this.$router.push("xiaoxi")
                }
            })
        }
    },
}
</script>