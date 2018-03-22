<template>
  <div class="password">
      <div class="title">修改密码</div>
      <div class="row">
          <span>原密码：</span>
          <input type="password" placeholder="请输入原密码" v-model="user.oldPas">
      </div>
      <div class="row">
          <span>新密码：</span>
          <input type="password" placeholder="请输入新密码" v-model="user.newPas">
      </div>
      <div class="row">
          <span>确认密码：</span>
          <input type="password" placeholder="请确认密码" v-model="user.confirmPas">
      </div>
      <div class="row btn">
          <div class="success" @click="confirm">确认</div>
          <div class="cancel" @click="cancel">清空</div>
      </div>
  </div>
</template>


<script>
export {default} from './passwordCtr.js'
</script>

<style scoped>
    .title{
        text-align: center;
        color: #5468eb;
        padding: 40px 0;
    }
    .row{
        width: 75%;
        margin: 0 auto;
        margin-bottom: 30px;
    }
    .row span{
        display: inline-block;
        width: 80px;
        text-align: right;
    }
    .row input{
        border: 1px solid #ddd;
        width: calc(100% - 100px);
        height: 30px;
        outline: none;
        vertical-align: middle;
        border-radius: 20px;
        padding-left: 12px;
    }
    .btn{
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .btn div{
        width: 35%;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        font-size: 14px;
    }
    .success{
        background-color: #4768f3;
        color: #fff;
    }
    .cancel{
        border: 1px solid #4768f3;
        color: #4768f3;
    }
</style>
