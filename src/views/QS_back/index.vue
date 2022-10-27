<template>
  <el-container id="app-container">
    <el-header id="header" height="64px">
      <img src="@/assets/zjucss.png" id="main-logo" />
      <div id="title">CSS问卷服务后台页面</div>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
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
</style>
