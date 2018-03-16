<template>
    <div>
        <div class="title">办公手机报</div>
        <div class="login">
            <div class="login_title">登录</div>
            <div class="row">
                <span class="iconfont icon-yonghu-copy"></span>
                <input type="text" placeholder="请输入姓名" v-model="user.name">  
            </div>
            <div class="row">
                 <span class="iconfont icon-mima"></span>
                 <input type="password" placeholder="请输入密码" v-model="user.password">
            </div>
            <div class="row btn" @click="login">
                登录
            </div>
        </div>
    </div>
</template>

<script>
    export {default} from './loginCtr';
</script>
    
<style scoped>
.title{
    color: #939393;
    text-align: center;
    font-size: 20px;
    padding: 30px 0 30%;
}
.login .login_title{
    color: #3f62f2;
    text-align: center;
    padding-bottom: 35px;
}
.row{
    position: relative;
    width: 70%;
    height: 40px;
    margin: 0 auto 30px;
}
.row input{
    width: calc(100% - 40px);
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 20px;
    outline: none;
    padding-left: 40px;
}
.row span{
    position: absolute;
    left: 15px;
    top: 9px;
    font-size: 20px;
    color: #3f62f2;
}
.btn{
    background-color: #3f62f2;
    border-radius: 20px;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
</style>