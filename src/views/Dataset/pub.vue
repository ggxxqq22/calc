<template>
  <div class="pub">
    <div class="title">数据集发布</div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="'left'"
      ref="ruleForm"
      label-width="150px"
      class="ruleForm"
    >
      <el-form-item label="数据集名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="数据集类型" prop="isClean">
        <el-radio-group v-model="ruleForm.isClean">
          <el-radio label="0">普通数据集</el-radio>
          <el-radio label="1">待清洗数据集</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="数据集公开类型" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="0">公开数据集</el-radio>
          <el-radio label="1">非公开数据集</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        v-if="ruleForm.type === '0'"
        label="数据集文件"
        prop="fileList"
      >
        <el-upload
          class="upload"
          ref="upload"
          action="#"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="ruleForm.fileList"
          :auto-upload="false"
          style="display: flex"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <div slot="tip" class="el-upload__tip" style="margin-left: 20px">
            请上传数据集文件
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="数据集简介" prop="intro">
        <el-input type="textarea" v-model="ruleForm.intro"></el-input>
      </el-form-item>
      <el-form-item label="联系方式(邮箱）" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="数据集图片" prop="imgList">
        <el-upload
          class="upload"
          ref="uploadImg"
          action="#"
          :on-remove="handleImgRemove"
          :on-change="handleImgChange"
          :file-list="ruleForm.imgList"
          :auto-upload="false"
          style="display: flex"
        >
          <el-button slot="trigger" size="small" type="primary"
            >选取文件</el-button
          >
          <div slot="tip" class="el-upload__tip" style="margin-left: 20px">
            请上传图片文件（不大于1M）
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="数据集标签" prop="tag">
        <el-input v-model="ruleForm.tag"></el-input>
        <p>多个标签以英文逗号分隔</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即发布</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'pub',
  data() {
    return {
      ruleForm: {
        name: '',
        type: '', //类型：公开，非公开
        isClean: '',
        intro: '', //简介
        email: '',
        tag: '',
        fileList: [],
        imgList: []
      },
      rules: {
        name: [
          { required: true, message: '请输入数据集名称', trigger: 'blur' }
        ],
        isClean: [
          { required: true, message: '请选择数据集类型', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择数据集公开类型', trigger: 'change' }
        ],
        intro: [
          { required: true, message: '请填写数据集简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleImgChange(file, fileList) {},
    handleImgRemove(file, fileList) {}
  }
}
</script>

<style lang="less" scoped>
.pub {
  width: 1040px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 100px;
  .ruleForm {
    width: 700px;
    margin: auto;
    p {
      color: rgb(119, 111, 111);
      font-size: 12px;
      margin-top: -5px;
    }
  }
  .title {
    font-size: 26px;
    margin-bottom: 30px;
    text-align: center;
  }
}
.upload {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
