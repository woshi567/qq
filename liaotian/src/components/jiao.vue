<template>
    <div>
        <div id="all">
            <div @click="xiaoxi">
                <img src="../../public/image/news1.png" alt="" v-if="position=='xiaoxi'">
                <img src="../../public/image/news.png" alt="" v-else>
                <div style="color:#73D2F8" v-if="position=='xiaoxi'">消息</div>
                <div style="color:#999" v-else>消息</div>
            </div>
            <div @click="people">
                <img src="../../public/image/people1.png" alt="" v-if="position=='lianxiren'">
                <img src="../../public/image/people.png" alt="" v-else>
                <div style="color:#73D2F8" v-if="position=='lianxiren'">联系人</div>
                <div style="color:#999" v-else>联系人</div>
            </div>
            <div @click="dongtai">
                <img src="../../public/image/dongtai1.png" alt="" v-if="position=='dongtai'">
                <img src="../../public/image/dongtai.png" alt="" v-else>
                <div style="color:#73D2F8" v-if="position=='dongtai'">动态</div>
                <div style="color:#999" v-else>动态</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#all{
    width: 100%;
    background-color: #FFF;
    height: 50px;
    position: fixed;
    top: 100%;
    margin-top: -51PX;
    display: flex;
    justify-content: space-between;
}
#all>div{
    text-align: center;
    width: 29%;
    height: 100%;
}
</style>
<script>
export default {
    data() {
        return {
            position:"",
        }
    },
    mounted() {
        let str=window.location.href
        str=str.split(/(?<!\/)\/(?!\/)/)[1]
        this.position=str
    },
    methods: {
        xiaoxi(){
            if(this.position!="xiaoxi"){
                this.$router.push("/xiaoxi")
            }
        },
        people(){
            if(this.position!="lianxiren"){
                this.$router.push("/lianxiren")
            }
        },
        dongtai(){
            if(this.position!="dongtai"){
                this.$router.push("/dongtai")
            }
        }
    },
}
</script>