<template>
  <div class="add">
    <div class="title">
          <span class="iconfont icon-fanhui" @click="goBack"></span>
    </div>
    <div class="tiele1">添加人员</div>

     <!-- 添加人员列表 -->
      <div class="table">
          <div class="tr bg-w">
            <div class="th">选择</div>
            <div class="th">部门</div>
            <div class="th ">岗位</div>
            <div class="th">姓名</div>
            <div class="th ">手机号</div>
          </div>
          <div class="tbody_list" :style="{height:height}" ref="content">
              <div>
                  <div v-for="(item,index) in memberList" :key="index">
                    <div class="tr" @click="check(index,item)">
                        <div class="td"><input type="radio" :value="index" v-model="value"></div>
                        <div class="td">{{item.department}}</div>
                        <div class="td">{{item.type}}</div>
                        <div class="td">{{item.username}}</div>
                        <div class="td">{{item.phone}}</div>
                    </div>
                  </div>
                  <div class="notice" v-if="memberList.length<=0">暂无添加人员</div>
              </div>
          </div>
      </div>
      <!-- 点击按钮 -->
      <div class="row btn">
          <div class="success" @click="confirm">添加人员</div>
          <div class="cancel" @click="cancel">取消</div>
      </div>
  </div>
</template>

<script>
export {default} from './addCtr.js'
</script>

<style scoped>
  .title{
        position: relative;
        text-align: center;
        height: 60px;
        background-color: #f5f6f8;
        line-height: 60px;
        font-size: 16px;
        border-bottom: 1px solid #ddd;
    }
    .title .icon-fanhui{
        position: absolute;
        left: 5px;
        font-size: 30px;
        vertical-align: middle;
        color: #4a57f1;
    }
    .tiele1{
      text-align: center;
      color: #4b6ef0;
      padding: 15px;
    }


     /* 添加人员列表 */ 
  
    .table {
    width:90%;
    margin: 0 auto;
    font-size:12px;
    border-top:1px solid #ddd;
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
        /* height: 200px; */
        overflow: hidden;
    }
    .notice{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: red;
    }

    /* 按钮部分 */
    .btn{
        width: 90%;
        margin: 20px auto;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
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


