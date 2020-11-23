<template>
  <div>
    <jiao />
      <div id="top">
        <div id="touxiang">
            <router-link to="ziliao">
              <img :src=me.img alt="">
            </router-link>
        </div>
        <div>
          联系人
        </div>

        <div id="add">
          <img src="../../public/image/addpeople.png" alt="">
        </div>
      </div>
      <sousuo />  
      <div id="eee">
        <router-link to="/">
          <div class="cc1">
            <div>新朋友</div>
            <div><img src="../../public/image/you1.png" alt="找不到"></div>
          </div>
        </router-link>
        <router-link to="/">
          <div class="cc1">
            <div>群通知</div>
            <div><img src="../../public/image/you1.png" alt="找不到"></div>
          </div>
        </router-link>

        <div id="fz">
            <div id="top1">
              <span class="span">好友</span>
              <span class="span">分组</span>
              <span class="span">群聊</span>
              <span class="span">设备</span>
            </div>
            <div class="frend">
              <lianxiren :arr=frends />
            </div>
        </div>
      </div>
  </div>
</template>
<style scoped>
#top1{
  display: flex;
  justify-content: space-between;
  padding: 8px 8px;
}
.span{
  display: inline-block;
  width: 20%;
  border-radius: 20px;
  height: 34px;
  line-height: 34px;
}
#fz{
  margin-top: 10px;
  background-color: #fff;
  height: 200px;
}
#eee{
  min-height: 600px;
  background-color: #f6f6f6;
}
.cc1{
  background-color: #fff;
  padding: 0 18px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
#touxiang img{
  width: 100%;
}
#add{
  padding-top: 15px;
}
#touxiang{
  overflow: hidden;
  width: 40px;
  border-radius: 50%;
  height: 40px;
  display: flex;
  justify-content: start;
  margin: auto 0;
}
#top>div:nth-child(2){
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  color: white;
}
#top{
  position: fixed;
  width: 100%;
  height: 50px;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  background-color: #71D1F8;
}
</style>
<script>
export default {
  data() {
    return {
      me:{},
      frends:[],
    }
  },
  mounted() {
    let span=document.getElementsByClassName("span")
    span[0].style.backgroundColor="#a0d7ecb9"
    span[0].style.color="#6191F8"
    span.forEach((elem,i)=> {
      elem.onclick=function(){
        span.forEach((elem,i) => {
          span[i].style.backgroundColor="#fff"
          span[i].style.color="#000"
        });
        span[i].style.backgroundColor="#a0d7ecb9"
        span[i].style.color="#6191F8"
      }
    }); 

    this.me=this.qs.parse(window.sessionStorage.getItem("user"))
    this.me.img=require("../assets/user/"+this.me.img+".jpg")
    this.axios.get("http://127.0.0.1:9999/havefrend?myid="+this.me.userid).then(res=>{
      this.frends=res.data
    })
  },
}
</script>