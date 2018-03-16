<template>
  <div class="sms">
      <div class="title">
          <div class="btn">
              {{this.$route.query}}
              <div class="add" @click="add">选择添加</div>
              <div class="delete" @click="delete1">删除人员</div>
              <div class="send" @click="send">发送消息</div>
          </div>
      </div>
      <div class="top">消息 <span>（{{notice}}）</span></div>
      <div class="text">
          <textarea name="" id="" placeholder="请输入消息内容" maxlength="70" @keyup="content" ref="con" v-model="con"></textarea>
      </div>
      <div class="top member">发送人员</div>
      <!-- 手动添加联系人 -->
      <div class="add_member">
          <input type="text" placeholder="请手动输入联系人" v-model="member">
          <span @click="addMember">手动添加</span>
      </div>
      <!-- 添加人员列表 -->
      <div class="table">
          <div class="tr bg-w">
            <div class="th">选择</div>
            <div class="th">部门</div>
            <div class="th ">岗位</div>
            <div class="th">姓名</div>
            <div class="th ">手机号</div>
          </div>
          <div class="tbody_list" ref="content" :style="{height:height}">
              <div>
                  <div v-for="(item,index) in memberList" :key="index">
                    <div class="tr" @click="check(index,item)">
                        <div class="td"><input type="radio" :value="index" v-model="value"></div>
                        <div class="td">{{item.section}}</div>
                        <div class="td">{{item.job}}</div>
                        <div class="td">{{item.name}}</div>
                        <div class="td">{{item.phone}}</div>
                    </div>
                  </div>
                  <div class="notice" v-if="memberList.length<=0">暂无添加人员</div>
              </div>
          </div>
      </div>

  </div>
</template>

<script>
    export {default} from './smsCtr.js'
</script>


<style scoped>
    .title{
        position: relative;
        text-align: center;
        height: 45px;
        padding-top: 15px;
        background-color: #f5f6f8;
        line-height: 60px;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
    }
    .btn{
        width: 100%;
        /* float: right; */
        display: flex;
        display: -webkit-flex;
        /* margin-top: 15px; */
        justify-content: space-around;
        margin-right: 5px;
        margin: 0 auto;
    }
    .btn div{
        height: 30px;
        margin: 0 5px;
        line-height: 30px;
        padding: 0 12px;
        font-size: 13px;
        border-radius: 15px;
        color: #fff;
    }
    .btn .add{
        background-color: #4768f3;
    }
    .btn .delete{
        background-color: #ef9117;
    }
    .btn .send{
        background-color: #f4474b;
    }
    .top{
        position: relative;
        text-align: center;
        padding: 10px 0 10px; 
        color: #556af9;
    }
    .top span{
        position: absolute;
        right: 0;
        font-size: 14px;
        color: #999999;
    }
    .text{
        width: 90%;
        margin: 0 auto;
        height: 80px;
    }
    .text textarea{
        width: calc(100% - 10px);
        height: 100%;
        padding: 5px;
        outline: none;
        border: 1px solid #ddd;
        border-radius: 10px;
        resize:none;
        color: #999999;
        background-color: #f6fbff;
    }
    .member{
        padding: 20px 0px 15px;
    }
    .add_member{
        width: 90%;
        margin: 0 auto;    
    }
    .add_member input{
        width: calc(67% - 15px);
        padding-left: 15px;
        outline: none;
        border: 1px solid #ddd;
        height: 30px;
        border-radius: 20px;
        background-color: #f6fbff;
    }
    .add_member span{
        display: inline-block;
        background: red;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 14px;
        color: #fff;
        background-color: #4768f3;
    }


    /* 添加人员列表 */ 
  
    .table {
    width:90%;
    margin:20px auto 0;
    font-size:12px;
    border-top:1px solid #bbb;
    border-radius: 5px 5px 0 0;
    }
    .tr {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    justify-content: center;
    height: 40px;
    align-items: center;
    background: white;
    border:1px solid #bbb;
    border-top:none;
    box-sizing: border-box;
    }
    .tr:nth-of-type(even) {
    background-color: #f7f7f7;
    }
    .th {
    justify-content: center;
    color: #3a61fa;
    display: flex;
    height: 40px;
    align-items: center;
    border-left:1px solid #bbb;
    }
    .td {
    justify-content: center;
    color: #333;
    display: flex;
    height: 40px;
    align-items: center;
    border-left:1px solid #ddd;
    }
    .table .bg-w{
    background: #f6fbff;
    border-radius: 5px 5px 0 0;
    }

    .th:nth-of-type(1),.td:nth-of-type(1) {
    flex:1;
    }
    .th:nth-of-type(2),.td:nth-of-type(2) {
    flex:2;
    }
    .th:nth-of-type(3),.td:nth-of-type(3) {
    flex:2;
    }
    .th:nth-of-type(4),.td:nth-of-type(4) {
    flex:2;
    }
    .th:nth-of-type(5),.td:nth-of-type(5) {
    flex:3;
    }
    .th:first-child {
    border:none;
    }
    .td:first-child {
    border-left: none;
    }
    .tbody_list{
        width: 100%;
        /* height: 130px; */
        overflow: hidden;
    }
    .notice{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: red;
    }
</style>
