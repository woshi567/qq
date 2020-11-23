<template>
    <div>
        
        <div v-for="(elem,i) of arr1" :key="i">
                    <div class="cc1" @click=go(elem)>
                        <div>
                            <img :src='`${require("../assets/user/"+elem.img+".jpg")}`' alt="">
                        </div>
                        <div>
                            <div>{{elem.username}}</div>
                            <div>[4G在线] <span>这是我的签名</span></div>
                        </div>
                    </div>
        </div>
    </div>
</template>
<style scoped>
.cc1{
    height: 60px;
    text-align: start;
    padding: 5px 25px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: start;
}
.cc1>div:first-child{
    margin-right: 15px;
    width: 40px;
    height:40px;
    overflow: hidden;
    border-radius: 50%;
}
.cc1>div:last-child>div:first-child{
    font-size: 18px;
    font-weight: 600;
}
.cc1>div:last-child>div:last-child{
    font-size: 13px;
    color: #999;
    font-weight: 400;
}
img{
    width: 100%;
}
</style>
<script>
export default {
    props:["arr"],
    data() {
        return {
            arr1:[],
        }
    },
    methods: {
        go(a){
            this.$router.push({name:"personal",params:{user:a}})
        }
    },
    watch: {
        arr(value){
            this.arr1=value
        }
    },
}
</script>