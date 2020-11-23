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
          动态
        </div>

        <div id="add">
          <img src="../../public/image/shezhi.png" alt="">
        </div>
      </div>

      <sousuo />  
  </div>
</template>
<style scoped>
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
    }
  },
  mounted() {
    this.me=this.qs.parse(window.sessionStorage.getItem("user"))
    this.me.img=require("../assets/user/"+this.me.img+".jpg")
  },
}
</script>