<template>
  <div>
    <div id="text">
    
    </div>
    <input type="text" id="message"><button  @click="postMessage">发送</button>
  </div>
</template>
<style scoped>
#text{
  background-color: #eee;
  height:400px;
  width: 100%;
  overflow: scroll;
}
input{
  outline: none;
  width: 80%;
  height: 40px;
}
button{
  width: 20%;
  height: 40px;
}
</style>
<script>
// let client = io('ws://127.0.0.1:4000');      
// export default {
//   data() {
//     return {
//       height:"",
//     }
//   },
//   methods: {
//      postMessage() {
//             // 获取多行文本框对象
//             let messageEle = document.getElementById('message');
//             // 获取多行文本框对象的内容
//             let messageVal = messageEle.value;
//             // socket.io的客户端要向服务器提交信息
//             client.emit("user send message",messageVal);
//             //清空内容
//             messageEle.value = '';
//         }
//   },
//   mounted() {
//     let str = location.search.substr(1); //返回问号之后所有的数据
//            //将获取到的username=123形式的数据以等号进行拆分
//            let array = str.split(/=/g);
//            let username = decodeURI(array[1]);
//            //1.客户端向服务器广播事件
//            client.emit('logined',username);
//            //客户端监听服务器发送的boast message事件
//         client.on('boast message',(data)=>{
//             //创建聊天DIV 
//            let divEle = document.createElement('h1');
//           //  设置DIV的内容
//            divEle.innerHTML = `<h1>${data}</h1>`;
//            //添加到聊天列表中
//            document.getElementById('text').appendChild(divEle)
//           let text =document.getElementById("text")
//           text.scrollTop=text.scrollHeight
//         });
//   },
  
  
// }
</script>