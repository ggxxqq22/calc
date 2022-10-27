<template>
  <div>
    <div class="radio" v-if="question.type === 'radio'">
      <div class="title">{{ question.title }}</div>
      <div class="option">
        <el-radio-group>
          <el-radio
            v-for="(option, index) in question.option"
            :key="index"
            style="display: block; margin-bottom: 15px"
            >{{ option }}</el-radio
          >
        </el-radio-group>
      </div>
      <img
        class="img"
        v-if="question.imgSrc.length"
        :src="question.imgSrc"
        alt=""
      />
      <el-divider></el-divider>
    </div>
    <div class="check" v-else-if="question.type === 'check'">
      <div class="title">{{ question.title }}</div>
      <div class="option">
        <el-checkbox-group v-model="checkList">
          <el-checkbox
            v-for="(option, index) in question.option"
            :label="option"
            :key="index"
            style="display: block; margin-bottom: 15px"
            >{{ option }}</el-checkbox
          >
        </el-checkbox-group>
      </div>
      <img
        class="img"
        v-if="question.imgSrc.length"
        :src="question.imgSrc"
        alt=""
      />
      <el-divider></el-divider>
    </div>
    <div class="text" v-else-if="question.type === 'text'"></div>
    <div class="ju" v-else-if="question.type === 'ju'"></div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      checkList: []
    }
  }
}
</script>

<style lang="less" scoped>
.radio,
.check {
  width: 840px;
  margin: 0 auto;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 20px;
  }
  .option {
    margin-left: 20px;
    line-height: 24px;
    font-size: 16px;
    margin-bottom: 40px;
  }
  .img {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 100px;
    height: 100px;
  }
}
</style>
