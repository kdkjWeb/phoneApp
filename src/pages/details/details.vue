<template>
  <div class="delails">
      <div class="title">
          <span class="iconfont icon-fanhui" @click="goBack"></span>
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
</style>


