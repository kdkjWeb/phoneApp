<template>
  <div class="broadcast">
      <div class="title">
          <span class="iconfont icon-xiangzuojiantou"></span>
          办公手机报
      </div>
      <div class="broadcast_list" :style="{height:height}" ref="content">
          <div >
              <div class="list" v-for="(item,index) in broadcastList" :key="index" @click="details">
                <p>{{item.title}}</p>
                <span>{{item.pubTime}}</span>
            </div>
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


    
</style>
