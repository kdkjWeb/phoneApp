<template>
    <div>
        <router-view/>
        <!-- 底部导航 -->
      <div class="bottom">
        <div @click="news" :class="[index == 0 ? 'active':'']">
          <span class="iconfont icon-guangboxianxing"></span>
          最新播报
        </div>
        <div class="add" @click="send" :class="[index == 1 ? 'active':'']">
            <div class="add_btn">
              <span class="iconfont icon-jia-copy"></span>
            </div>
          发送消息
        </div>
        <div @click="change" :class="[index == 2 ? 'active':'']">
          <span class="iconfont icon-mima"></span>
          修改密码
        </div>
      </div>
    </div>
</template>

<script>
    export {default} from './indexCtr';
</script>
    
<style scoped>
    /* 底部导航 */
    .bottom{
    position: fixed;
    display: flex;
    display: -webkit-flex;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #ddd;
    box-shadow: 5px 5px 5px 5px #8d8d8d;
  }
  .bottom div{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #8e8e8e;
  }
  .bottom div span{
    padding-top: 5px;
    display: block;
    font-size: 25px;
  }
  
  .add_btn{
    width: 45px;
    height: 45px;
    /* border: 1px solid red; */
    border-top: 2px solid #ddd;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #ddd;
    border-radius: 50%;
    margin: -25px auto 7px;
    transform: rotate(-45deg);
    background: #fff;
  }
  .add_btn span{
    position: relative;
    left:2px;
    top: 4px;
    transform: rotate(45deg);
    font-weight: bold;
    color: #bbb;
  }
  .active{
    color: #919cf6 !important;
  }
</style>
