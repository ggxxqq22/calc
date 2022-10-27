<template>
  <div class="container">
    <div class="wrapper">
      <div class="title">
        {{ qsList[0].title }}
      </div>
      <div class="qsList">
        <div class="qsTitle">*1.矩阵量表测试</div>
        <div class="answer">
          <el-row>
            <el-col :span="4">矩阵量表</el-col>
            <el-col :span="4">1</el-col>
            <el-col :span="4">2</el-col>
            <el-col :span="4">3</el-col>
            <el-col :span="4">4</el-col>
            <el-col :span="4">5</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">问题1</el-col>
            <el-col :span="4"
              ><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="4">问题2</el-col>
            <el-col :span="4"
              ><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
            <el-col :span="4"><el-radio  label=""></el-radio
            ></el-col>
          </el-row>
          <!-- <img
            src="@/assets/test.png"
            alt=""
          /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,
      qsList: [
        {
          title: '问卷标题',
          type: 'ratio',
          checkList: [true, false, false],
          optionNum: 2,
          option: [],
          imgList: [
            {
              name: '示例',
              url: './src/assets/test.png'
              
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.container {
  .wrapper {
    margin-top: 3rem;
    .title {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
      color: rgb(0, 149, 255);
    }
    .qsList {
      width: 900px;
      margin: 2rem auto;
      .answer {
        margin-top: 1rem;
      }
    }
  }
}
</style>
