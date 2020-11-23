<template>
    <div id="add">
        <div id="sousuo" @click="go"> 搜索</div>
    </div>
</template>
<style scoped>
    #add{
        padding: 0 18px;
        padding-top: 55px;
    }
    #sousuo{
        color: #999;
        line-height: 35px;
        text-align: center;
        height: 35px;
        width: 100%;
        background: url("../../public/image/sousuo.png") no-repeat 40% 50%;
        outline: none;
        background-color: #eee;
        margin: 0px auto;
        border-radius: 20px;
    }
</style>
<script>
export default {
    methods: {
        go(){
            this.$router.push("sousuo")
        }
    },
}
</script>