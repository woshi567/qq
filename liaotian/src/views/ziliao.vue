<template>
    <div>
        <div id="top">
            <span>
                <a href="javascript:history.back(-1)">
                    <img src="../../public/image/back.png" alt="">
                </a>
            </span>
            资料编辑
        </div>
        <div id="body">
            <div class="text">
                <span>头像</span>
                <span class='jiantou'>
                    <img src="../../public/image/you2.png" alt="">
                </span>
            </div>
            <div class="text">
                <span>签名</span>
                <input type="text" placeholder="编辑个性签名">
                <span class='jiantou'>
                    <img src="../../public/image/you2.png" alt="">
                </span>
            </div>

            <div id="d1"></div>
            <div class="text">
                <span>昵称</span>
                <span>ZzZz</span>
                <span class='jiantou'>
                    
                </span>
            </div>
            <div class="text">
                <span>性别</span>
                <span>男</span>
                <span class='jiantou'>
                </span>
            </div>
            <div class="text">
                <span>生日</span>
                <span>1997-8-21</span>
                <span class='jiantou'>
                    <img src="../../public/image/you2.png" alt="">
                </span>
            </div>
            <div id="d2">
                教育经历
            </div>
            <div class="text">
                <span id="school">添加大学</span>
            </div>
            <div class="text">
                <span id="school1">添加中学</span>
            </div>
            <div class="text">
                <span id="school2">添加小学</span>
            </div>
            <div id="d3"></div>
            <div class="text">
                <span>职业</span>
                <span> <span id="color">学生</span> 学生</span>
                <span class='jiantou'>
                </span>
            </div>
            <div class="text">
                <span>公司</span>
                <input type="text" placeholder="填写公司发现同时">
                <span class='jiantou'>
                </span>
            </div>
            <div class="text">
                <span>所在地</span>
                <span>安道尔-圣湖利亚-德罗利亚</span>
                <span class='jiantou'>
                    <img src="../../public/image/you2.png" alt="">
                </span>
            </div>
            <div class="text">
                <span>家乡</span>
                <span>阿塞拜疆-卡尔巴卡尔</span>
                <span class='jiantou'>
                    <img src="../../public/image/you2.png" alt="">
                </span>
            </div>
            <div class="text">
                <span>邮箱</span>
                <input type="text" placeholder="你的邮箱">
                <span class='jiantou'>
                </span>
            </div>
            <div id="d5"></div>
            <div id="bottom">
                <span>个人说明</span>
                <span style="paddingLeft:20px;color:#999">介绍一下自己吧</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #bottom{
        text-align: start;
        line-height: 50px;
        padding: 0 18px;
        width: 100%;
        height: 50px;
    }
    #d5{
        height: 20px;
        background-color: #efefef;
    }
    #color{
        display: inline-block;
        height: 26px;
        color: white;
        border-radius: 5px;
        text-align: center;
        width: 36px;
        line-height: 26px;
        background-color: #fab2da;
    }
    #d3{
        height: 15px;
        background-color: #efefef;
    }
    #school,#school1,#school2{
        color: #71D1F8;
        text-align: start;
        width: 100%;
    }
    #d2{
        padding: 0 18px;
        height: 40px;
        color: #999;
        background-color: #efefef;
        line-height: 40px;
        text-align: start;
    }
    #d1{
        height: 20px;
        background-color: #efefef;
    }
    input{
        color: #999;
        font-size: 14px;
        text-align: center;
        outline: none;
        border:none;
    }
    .jiantou{
        width: 10%;
        padding-top: 10px;
    }
    .jiantou>img{
        float:right;
    }
    .text>span:first-child{
        display: inline-block;
        width: 15%;
    }
    .text>span:nth-child(2){
        padding-left: 10%;
        display: inline-block;
        text-align: start;
        width: 75%;
    }
    .text{
        line-height: 50px;
        width: 100%;
        height: 50px;
        background-color: #fff;
        padding: 0 18px;
        display: flex;
        justify-content: space-between;
    }
    #body{
        padding: 65px 0 0;
        width: 100%;
        background-color: #efefef;
        height: 200px;
    }
    #top>span{
        display: inline-block;
        float: left;
        margin: 5px 0 0 0 ;
    }
    #top{
        padding: 0 18px;
        line-height: 50px;
        color: white;
        font-size: 18px;
        position: fixed;
        height: 50px;
        width: 100%;
        background: #71D1F8;
    }
</style>
<script>
export default {
    
}
</script>