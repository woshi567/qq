<template>
  <div id="all">
    <div id="top">
      <div>
        <router-link to="/xiaoxi" >
          <img src="../../public/image/back.png" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <div>
            <img src="../../public/image/erduo.png" alt="">
          <span>
           {{user.othername}}
          </span>
          </div>
            <div> TM移动在线 - 4G</div>
          </router-link>
      </div>
      <div>
        <img src="../../public/image/phone.png" alt="">
        <img src="../../public/image/liebiao.png" alt="">
      </div>
    </div>
    <div id="body">
    </div>

    <div id="bottom">
      <div id="input">
        <input type="text" v-model="text">
        <button v-if="i==0">发送</button>
        <button style="backgroundColor:#71D1F8"  v-else @click="send">发送</button>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
  #input{
    display: flex;
    justify-content: space-between;
  }
  #input>input{
    font-size: 20px;
    padding-left: 10px;
    border: none;
    outline: none;
    border-radius: 19px;
    width: 80%;
    height: 38px;
  }
  #input>button{
    background-color: #c9ebf8;
    border-radius: 19px;
    color: white;
    width: 18%;
    height: 38px;
    outline: none;
    border: none;
  }
  #bottom{
    position: absolute;
    top:100%;
    width: 100%;
    height: 76px;
    margin-top: -76px;
    background-color: #eee;
    padding: 0 10px;
  }
  #bottom>div{
    height: 50%;
  }
  #body{
    overflow: scroll;
    height: 100%;
    height: 541px;
    padding-left: 0 18px;
    background-color: #eee;
    padding: 0 18px;
  }


  #top{
    background-color: #71D1F8;
    width: 100%;
    height: 50px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  #top>div{
    height: 100%;
  }
  #top>div:first-child{
    padding-top: 13px;
  }
  #top>div:nth-child(2){
    color: white;
    text-align: start;
  }
  #top>div:nth-child(2) div:first-child{
    height: 30px;
    padding-top: 10px;
    line-height: 20px;
    font-size: 16px;
  }
  #top>div:nth-child(2) div:last-child{
    line-height: 20px;
    font-size: 9px;
    height: 2px;
  }
  #top>div:last-child{
    padding-top: 13px;
  }
  #top>div:last-child img~img{
    padding-left: 7px;
  }
</style>
<script>
let client = io('ws://127.0.0.1:4000');
let input=document.getElementsByTagName("input")[0]
let button=document.getElementsByTagName("button")[0]
export default {
  data() {
    return {
      //文本框内容
      text:"",
      i:0,
      me:{},
      user:[],
      mytouxiang:'',
      frendtouxiang:'',
      myjilu:[],
      frendjilu:[],
    }
  },
  methods: {
    send(){
      let body=document.getElementById("body")
      let me=this.qs.parse(window.sessionStorage.getItem("user"))
      let obj={
        me:me.userid,
        frend:this.user.userid,
        value:this.text,
      }
      let nr = document.createElement("div")
      nr.innerHTML=`
      <div class="me">
      <div>${this.text}</div>
      <div>
       <img src="${this.mytouxiang}" alt="找不到">
      </div>
      </div>
      `
      body.appendChild(nr)
      body.scrollTop=body.scrollHeight
      client.emit("user send message",this.qs.stringify(obj));
      let data=new Date()
      let obj1={
        isme:true,
        value:this.text,
        shijian:data,
        number:0
      }
      let obj2={
        isme:false,
        value:this.text,
        shijian:data,
        number:0
      }
      this.myjilu.push(obj1)
      this.frendjilu.push(obj2)
      this.text=''
    }
  },
  mounted() {
    this.me=this.qs.parse(window.sessionStorage.getItem("user"))
    this.mytouxiang="./image/user/"+this.me.img+".jpg"
    this.user=this.qs.parse(window.sessionStorage.getItem("personal"))
    this.frendtouxiang="./image/user/"+this.user.img+".jpg"
    let body=document.getElementById("body")
    let str = location.search.substr(1); //返回问号之后所有的数据
           //将获取到的username=123形式的数据以等号进行拆分
           let array = str.split(/=/g);
           let username = decodeURI(array[1]);
           //1.客户端向服务器广播事件
           client.emit('logined',username);
           //客户端监听服务器发送的boast message事件
        client.on('boast message',(data)=>{
          data=this.qs.parse(data)
          if( data.frend==this.qs.parse(window.sessionStorage.getItem("user")).userid){
            let time=new Date()
            let getobj1={
              isme:false,
              value:data.value,
              shijian:time,
              number:0
            }
            let getobj2={
              isme:true,
              value:data.value,
              shijian:time,
              number:0
            }
            this.myjilu.push(getobj1)
            this.frendjilu.push(getobj2)
            let nr = document.createElement("div")
            nr.innerHTML=`
            <div class="other">
            <div>
              <img src="${this.frendtouxiang}" alt="找不到">
            </div>
            <div>${data.value}</div>
            </div>
            `
            body.appendChild(nr)
            body.scrollTop=body.scrollHeight
          }
        });


      //获取聊天记录
      this.axios.get("http://127.0.0.1:9999/getjilu?myid="+this.me.userid+'&frendid='+this.user.userid).then(res=>{
        if(res.data[0].str!=null){
          this.myjilu=JSON.parse(res.data[0].str)
          this.myjilu.forEach((elem,i) => {
            if(elem.isme){
              let nr = document.createElement("div")
              nr.innerHTML=`
              <div class="me">
              <div>${elem.value}</div>
              <div>
              <img src="${this.mytouxiang}" alt="找不到">
              </div>
              </div>
              `
              body.appendChild(nr)
            }else{
              let nr = document.createElement("div")
              nr.innerHTML=`
              <div class="other">
              <div>
                <img src="${this.frendtouxiang}" alt="找不到">
              </div>
              <div>${elem.value}</div>
              </div>
              `
              body.appendChild(nr)
            }
          });
        }
      })
      this.axios.get("http://127.0.0.1:9999/getjilu?myid="+this.user.userid+'&frendid='+this.me.userid).then(res=>{
        if(res.data[0].str!=null){
          this.frendjilu=JSON.parse(res.data[0].str)
        }
      })
  },
  beforeDestroy() {
      let strjilu=JSON.stringify(this.myjilu)
      let strfrendjilu=JSON.stringify(this.frendjilu)
      let objall={
        myid:this.me.userid,
        frendid:this.user.userid,
        value:strjilu,
      }
      let objall1={
        myid:this.user.userid,
        frendid:this.me.userid,
        value:strfrendjilu,
      }
      //添加到自己聊天记录
      this.axios.get("http://127.0.0.1:9999/putjilu?"+this.qs.stringify(objall)).then(res=>{
        // console.log("自己好了")
      })
        //添加到朋友聊天记录
      this.axios.get("http://127.0.0.1:9999/putjilu?"+this.qs.stringify(objall1)).then(res=>{
        // console.log("朋友好了")
      })
      
  },
  watch: {
    text(value){
      if(value.length!=0){
        this.i=1
      }else{
        this.i=0
      }
    }
  },
}
</script>