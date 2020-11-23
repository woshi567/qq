<template>
  <div>
    <jiao />
      <div id="top">
        <div id="touxiang">
          <div>
            <router-link to="ziliao">
              <img :src=img alt="">
            </router-link>
          </div>
          <div>
            <h3>{{user.username}}</h3>
            <div id="online">
              <div>
                <div id="zhuangtai">
                <img src="../../public/image/manglu.png" alt="">
              </div>
              </div>
              <div>手机在线-wifi ></div>
            </div>
          </div>
        </div>
        <div id="add">
          <img src="../../public/image/add.png" alt="">
        </div>
      </div>

      <sousuo />  
  </div>
</template>
<style scoped>
#touxiang>div:first-child img{
  width: 100%;
}
#add{
  padding-top: 15px;
}
#zhuangtai{
  width: 12px;
  height: 12px;
  border:0px;
  border-radius: 50%;
  background-color: #fff;
  margin: 3px 5px 0 0;
}
#online{
  padding-top: 2px;
  font-size: 9px;
  display: flex;
  justify-content: start;
}
#touxiang>div:last-child{
  color: white;
  text-align: start;
  padding: 0 0 0 18px;
}
#touxiang>div:first-child{
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
#touxiang{
  width: 70%;
  height: 40px;
  display: flex;
  justify-content: start;
  margin: auto 0;
}
#top{
  width: 100%;
  position: fixed;
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
      user:"",
      img:''
    }
  },
  mounted() {
    this.user=this.qs.parse(window.sessionStorage.user)
    this.img=require("../assets/user/"+this.user.img+".jpg")
  },
}
</script>