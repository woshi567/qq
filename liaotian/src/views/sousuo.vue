<template>
    <div id="all">
       <div id="top">
           <input type="text" placeholder="搜索" id="input" v-model="value">
           <div> <a href="javascript:history.back(-1)">取消</a></div>
       </div>
       <people :arr=arr />
    </div>
</template>
<style scoped>
#all{
    padding: 0 18px;
    text-align: start;
}
#top{
    width: 100%;
    margin: 10px 0 30px 0;
    display: flex;
    justify-content: space-between;
}
#top>div{
    color: #71D1F8;
    height: 30px;
    line-height: 30px;
}
input{
    padding-left: 10%;
    background: url("../../public/image/sousuo.png") no-repeat 5% 50%;
    width: 87%;
    height: 30px;
    outline: none;
    border:none;
    background-color: #eee;
    border-radius:15px ;
}
</style>
<script>
export default {
    data() {
        return {
            value:'',
            arr:[],
        }
    },
    mounted() {
        let input=document.getElementById("input")
        input.focus()
    },
    watch: {
        value(e){
            if(e.length!=0){
                this.axios.get("http://127.0.0.1:9999/chaxun?name="+this.value).then(res=>{
                    this.arr=res.data
                })
            }
        }
    },
}
</script>