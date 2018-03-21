<template>
  <div class="delails">
      <div class="title">
          <span class="iconfont icon-fanhui" @click="goBack"></span>
    </div>
    <div class="content">
        <div class="top">
            <div class="tob_title">{{artice.title}}</div>
            <span>{{artice.pubTime}}</span>
        </div>
        <div v-html="content" ref="contentBox"></div>
    </div>
  </div>
</template>

<script>
export {default} from './detailsCtr.js'
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

    .content{
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
    }
    .top{
        position: relative;
        padding-bottom: 5px;
    }
    .tob_title{
         width: 70%;
         color: #3265e4;
    }
    .top span{
        position: absolute;
        font-size: 14px;
        right: 0;
        top: 0;
    }
</style>


