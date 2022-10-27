<template>
  <div>
    <section class="title">
      <h2>计算社会科学中心数据集目录系统</h2>
      <p>
        该数据集目录系统致力于分享大家手中的私有数据集，让大家能够充分利用数据资源，实现互利共赢的数据交换
      </p>
      <p>
        目前已有的功能：发布共享数据集、浏览公开数据集目录、与数据集作者取得联系、发布待清洗数据集任务等
      </p>
    </section>

    <section class="router-container">
      <router-link to="/dataset/page"
        ><el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="@/assets/list.png" class="image" />
          <div style="padding: 14px 0; text-align: center">
            <span>数据集目录</span>
          </div>
        </el-card></router-link
      >
      <router-link to="/dataset/pub"
        ><el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="@/assets/pub.png" class="image" />
          <div style="padding: 14px 0; text-align: center">
            <span>发布数据集</span>
          </div>
        </el-card></router-link
      >
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
::v-deep .el-card {
  width: 300px;
}
.router-container {
  width: 1040px;
  margin: 0 auto 100px;
  display: flex;
  justify-content: space-around;
}
.title {
  width: 1040px;
  margin: 80px auto;
  text-align: center;
  h2 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>

<style lang="less" scoped>
.image {
  width: 100%;
  height: 240px;
  display: block;
}
</style>
