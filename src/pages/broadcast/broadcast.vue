<template>
  <div class="broadcast">
      <div class="title">
          <span class="iconfont icon-xiangzuojiantou"></span>
          办公手机报
      </div>
      <div class="btn">
          <div class="file" @click="file" :class="{'active': activeIndex == 0}">文件列表</div>
          <div class="history" @click="history" :class="{'active': activeIndex == 1}">消息历史</div>
      </div>
      <div class="broadcast_list" :style="{height:height}" ref="content">
          <div >
              <div class="list" v-for="(item,index) in broadcastList" :key="index" @click="details(item)">
                <p>{{item.title}}</p>
                <span>{{item.pubTime}}</span>
                <p>{{item.message}}</p>
              </div>
              <!-- <div class="list" v-for="(item,index) in broadcastList1" :key="index" @click="details(item)" v-if="broadcastList1.length>0">
                <p>{{item.message}}</p>
              </div> -->
              <div class="notice" v-if="broadcastList.length==undefined||broadcastList.length<=0">暂无新闻列表</div>
          </div>
      </div>
          
  </div>
</template>

<script>
    export {default} from './broadcastCtr.js'
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
    .title .icon-xiangzuojiantou{
        position: absolute;
        left: 0px;
        font-size: 40px;
        vertical-align: middle;
        color: #4a57f1;
    }
    .broadcast_list{
        padding: 10px; 
        overflow: hidden;
    }
    .broadcast_list div.list{
        position: relative;
        border-bottom: 1px dotted #ddd;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
    }
    .broadcast_list p{
        width: 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .broadcast_list span{
        position: absolute;
        right: 0;
        top: 0;
    }

    .notice{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: red;
    }
    
    .btn{
        width: 100%;
        height: 35px;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        text-align: center;
        margin: 20px 0;
    }
    .btn div{
        width: 35%;
        height: 35px;
        line-height: 35px;
        border: 1px solid #4768f3;
        border-radius: 20px;
        font-size: 14px;
    }
    .active{
        background-color: #4768f3;
        color: #fff;
    }
</style>
