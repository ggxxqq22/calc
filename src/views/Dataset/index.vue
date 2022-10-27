<template>
  <el-container id="app-container">
    <el-header id="header" height="64px">
      <img src="@/assets/zjucss.png" id="main-logo" />
      <div id="title">CSS数据库目录系统</div>
      <div class="router">
        <router-link to="/dataset/home"><span>首页</span></router-link>
        <router-link to="/dataset/page"><span>目录</span></router-link>
        <router-link to="/dataset/pub"><span>发布</span></router-link>
      </div>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <div class="feedback" @click="handleFeedback">
      <i class="el-icon-chat-round"></i>
    </div> 
  </el-container>
</template>

<script>
export default {
  methods: {
    handleFeedback() {

    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(16, 78, 91);
  //background: no-repeat url('@/assets/home_backgroud.png') 0 -50px;
  color: #333;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  #main-logo {
    width: 167px;
    height: 34px;
  }
  #tips {
    width: 100px;
  }
  #title {
    font-size: 24px;
    margin-left: 80px;
    flex: 1;
  }
  .router {
    span {
      color: white;
      margin-left: 25px;
    }
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  //text-align: center;
  #title1 {
    margin-left: -10px;
  }
  .el-menu-item {
    margin-left: 10px;
  }
}
.el-main {
  background-color: #f5f9fa;
  min-height: calc(100vh - 64px);
  color: #333;
  padding: 0 0;
}
#menu {
  height: 100%;
  span {
    font-size: 16px;
    margin-left: 10px;
  }
}

.feedback {
  position: fixed;
  right: 0;
  bottom: 20vh;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 2px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
}
</style>
