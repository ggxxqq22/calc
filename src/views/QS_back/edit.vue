<template>
  <div>
    <div class="container">
      <h2 @click="titleClick" v-if="!titleChange">
        {{ title }}
      </h2>
      <input
        type="text"
        class="qsTitle"
        v-if="titleChange"
        v-model="titleValue"
        @blur="titleSubmit"
        @keyup.enter="titleSubmit"
        ref="titleInput"
      />
      <question
        v-for="question in questions"
        :key="question.title"
        :question="question"
      ></question>
      <div class="content">
        <div class="add">
          <transition name="slide">
            <div class="add-option" v-if="showBtn">
              <button @click="radioVisible = true">单选题</button>
              <button @click="checkVisible = true">多选题</button>
              <button @click="textVisible = true">文本题</button>
              <button @click="juVisible = true">矩阵量表题</button>
            </div>
          </transition>
          <div class="add-item" @click="addItemClick">
            <span class="add-icon">+</span><span>添加问题</span>
          </div>
        </div>
      </div>
      <footer>
        <span>问卷截止日期</span>
        <el-date-picker
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
        <div class="btn-box">
          <button class="save">保存问卷</button>
          <button class="issue">发布问卷</button>
        </div>
        <el-checkbox label="总表题目随机" class="xuanze"></el-checkbox>
        <el-input
          placeholder="(可选)不参与随机题号,用逗号 , 隔开"
          clearable
        ></el-input>
      </footer>
      <!-- 单选题 -->
      <el-dialog title="添加单选题" :visible.sync="radioVisible">
        <el-form ref="radio" :model="radio" label-width="100px">
          <el-form-item label="标题">
            <el-input v-model="radio.title"></el-input>
          </el-form-item>
          <el-form-item label="选项数量">
            <el-select v-model="radio.optionNum" placeholder="请选择选项数量">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
              <el-option label="6" value="6"></el-option>
              <el-option label="7" value="7"></el-option>
              <el-option label="8" value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-for="option in radioOptions"
            :key="option"
            :label="`选项${option}`"
          >
            <el-input v-model="radio.option[option - 1]"></el-input>
          </el-form-item>
          <el-form-item label="选项">
            <el-checkbox
              label="必填"
              name="checkList"
              v-model="radio.checkList[0]"
            ></el-checkbox>
            <el-checkbox
              label="选项随机分布"
              name="checkList"
              v-model="radio.checkList[1]"
            ></el-checkbox>
            <el-checkbox
              label="场景随机"
              name="checkList"
              v-model="radio.checkList[2]"
            ></el-checkbox>
          </el-form-item>
          <div class="randomTip" v-if="radio.checkList[2]">
            场景随机（不同人群出现不同随机题目与选项）使用方法:
            <br />请在标题或选项中使用 {} 表示随机出现的位置,并将就选项用 |
            隔开,最终生成的题目将随机在|隔开的文字中产生, 示例: {大街 | 马路 |
            人行道}
          </div>
          <el-divider></el-divider>
          <el-form-item label="图片上传">
            <el-upload
              class="upload-demo"
              action="#"
              :on-change="handleRadioImgChange"
              :on-remove="handleRadioImgRemove"
              :limit="1"
              :file-list="radio.fileList"
              :auto-upload="false"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="RadioCreate">立即创建</el-button>
            <el-button @click="radioVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 多选题 -->
      <el-dialog title="添加多选题" :visible.sync="checkVisible">
        <el-form ref="check" :model="check" label-width="100px">
          <el-form-item label="标题">
            <el-input v-model="check.title"></el-input>
          </el-form-item>
          <el-form-item label="选项数量">
            <el-select v-model="check.optionNum" placeholder="请选择选项数量">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
              <el-option label="6" value="6"></el-option>
              <el-option label="7" value="7"></el-option>
              <el-option label="8" value="8"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-for="option in checkOptions"
            :key="option"
            :label="`选项${option}`"
          >
            <el-input v-model="check.option[option - 1]"></el-input>
          </el-form-item>
          <el-form-item label="选项">
            <el-checkbox
              label="必填"
              name="checkList"
              v-model="check.checkList[0]"
            ></el-checkbox>
            <el-checkbox
              label="选项随机分布"
              name="checkList"
              v-model="check.checkList[1]"
            ></el-checkbox>
            <el-checkbox
              label="场景随机"
              name="checkList"
              v-model="check.checkList[2]"
            ></el-checkbox>
          </el-form-item>
          <div class="randomTip" v-if="check.checkList[2]">
            场景随机（不同人群出现不同随机题目与选项）使用方法:
            <br />请在标题或选项中使用 {} 表示随机出现的位置,并将就选项用 |
            隔开,最终生成的题目将随机在|隔开的文字中产生, 示例: {大街 | 马路 |
            人行道}
          </div>
          <el-divider></el-divider>
          <el-form-item label="图片上传">
            <el-upload
              class="upload-demo"
              action="#"
              :on-change="handleCheckImgChange"
              :on-remove="handleCheckImgRemove"
              :limit="1"
              :file-list="check.fileList"
              :auto-upload="false"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="CheckCreate">立即创建</el-button>
            <el-button @click="checkVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <el-dialog title="添加文本题" :visible.sync="textVisible">
        <el-form ref="text" :model="text" label-width="100px">
          <el-form-item label="标题">
            <el-input v-model="text.title"></el-input>
          </el-form-item>
          <el-form-item label="提示（可选）">
            <el-input v-model="text.tip"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="TextCreate">立即创建</el-button>
            <el-button @click="textVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <!-- 矩阵量表题 -->
      <el-dialog title="添加矩阵量表题" :visible.sync="juVisible">
        <el-form ref="ju" :model="ju" label-width="100px">
          <el-form-item label="标题">
            <el-input v-model="ju.title"></el-input>
          </el-form-item>
          <el-form-item label="问题数量">
            <el-select v-model="ju.optionNum" placeholder="请选择选项数量">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
              <el-option label="6" value="6"></el-option>
              <el-option label="7" value="7"></el-option>
              <el-option label="8" value="8"></el-option>
              <el-option label="9" value="9"></el-option>
              <el-option label="10" value="10"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            v-for="option in juOptions"
            :key="option"
            :label="`问题${option}`"
          >
            <el-input v-model="ju.option[option - 1]"></el-input>
          </el-form-item>
          <el-form-item label="列数量">
            <el-select v-model="ju.columnNum" placeholder="请选择几级量表">
              <el-option label="3" value="3"></el-option>
              <el-option label="4" value="4"></el-option>
              <el-option label="5" value="5"></el-option>
              <el-option label="6" value="6"></el-option>
              <el-option label="7" value="7"></el-option>
              <el-option label="8" value="8"></el-option>
              <el-option label="9" value="9"></el-option>
              <el-option label="10" value="10"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选项">
            <el-checkbox
              label="选项随机"
              name="checkList"
              v-model="ju.checkList[0]"
            ></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="JuCreate">立即创建</el-button>
            <el-button @click="juVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Question from '@/components/qs/Question.vue'
export default {
  components: { Question },
  data() {
    return {
      questions: [],
      title: '问卷标题',
      titleValue: '',
      titleChange: false,
      showBtn: false,
      radioVisible: false,
      checkVisible: false,
      textVisible: false,
      juVisible: false,
      radio: {
        title: '',
        checkList: [false, false, false],
        optionNum: 0,
        option: [],
        imgSrc: '',
        fileList: []
      },
      check: {
        title: '',
        checkList: [false, false, false],
        optionNum: 0,
        option: [],
        imgSrc: '',
        fileList: []
      },
      text: {
        title: '',
        tip: ''
      },
      ju: {
        title: '',
        checkList: [false],
        optionNum: 0,
        option: [],
        columnNum: 0
      }
    }
  },
  computed: {
    radioOptions() {
      let res = []
      for (let i = 0; i < this.radio.optionNum; i++) {
        res.push(i + 1)
      }
      return res
    },
    checkOptions() {
      let res = []
      for (let i = 0; i < this.check.optionNum; i++) {
        res.push(i + 1)
      }
      return res
    },
    juOptions() {
      let res = []
      for (let i = 0; i < this.ju.optionNum; i++) {
        res.push(i + 1)
      }
      return res
    }
  },
  methods: {
    titleSubmit() {
      this.titleValue = this.titleValue.trim()
      this.title = this.titleValue === '' ? this.title : this.titleValue
      this.titleChange = false
    },
    titleClick() {
      this.titleChange = !this.titleChange
      setTimeout(() => {
        this.$refs.titleInput.focus()
      }, 150)
    },
    addItemClick() {
      if (this.showBtn === false) {
        this.showBtn = !this.showBtn
      } else {
        this.showBtn = !this.showBtn
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    RadioCreate() {
      this.radioVisible = false
      const qs = this.radio
      qs.type = 'radio'
      qs.title = this.questions.length + 1 + '.  ' + qs.title
      this.questions.push(qs)
      this.radio = {
        title: '',
        checkList: [false, false, false],
        optionNum: 0,
        option: [],
        imgSrc: '',
        fileList: []
      }
    },
    CheckCreate() {
      this.checkVisible = false
      const qs = this.check
      qs.type = 'check'
      qs.title = this.questions.length + 1 + '.  ' + qs.title
      this.questions.push(qs)
      this.check = {
        title: '',
        checkList: [false, false, false],
        optionNum: 0,
        option: [],
        imgSrc: '',
        fileList: []
      }
    },
    TextCreate() {
      this.textVisible = false
      console.log(this.text)
    },
    JuCreate() {
      this.juVisible = false
      console.log(this.ju)
    },
    handleRadioImgChange(file, fileList) {
      const _this = this
      if (file.size / 1024 > 500) {
        this.$message.error('上传文件大于500kb')
        this.radio.imgSrc = ''
        this.radio.fileList = []
        return
      } else {
        const reader = new FileReader()
        reader.readAsDataURL(file.raw)
        reader.onload = function () {
          _this.radio.imgSrc = this.result
        }
      }
    },
    handleRadioImgRemove(file, fileList) {
      this.radio.fileList = []
      this.radio.imgSrc = ''
    },
    handleCheckImgChange(file, fileList) {
      const _this = this
      if (file.size / 1024 > 500) {
        this.$message.error('上传文件大于500kb')
        this.check.imgSrc = ''
        this.check.fileList = []
        return
      } else {
        const reader = new FileReader()
        reader.readAsDataURL(file.raw)
        reader.onload = function () {
          _this.check.imgSrc = this.result
        }
      }
    },
    handleCheckImgRemove(file, fileList) {
      this.check.fileList = []
      this.check.imgSrc = ''
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1040px;
  margin: 5rem auto;
  padding: 5rem;
  color: #666;
  background-color: #fff;
  border-radius: 0.4rem;
  h2 {
    height: 6rem;
    margin-bottom: 3rem;
    line-height: 6rem;
    text-align: center;
    font-size: 2rem;
    color: #555;
    cursor: pointer;
    &:hover {
      background-color: #fff5ee;
    }
  }
  .qsTitle {
    height: 6rem;
    width: 100%;
    margin-bottom: 3rem;
    font-size: 2rem;
    text-align: center;
    border: 1px solid #ccc;
    background-color: #ccc;
  }
  .content {
    padding: 3rem;
    border-top: 0.2rem solid #ccc;
    border-bottom: 0.2rem solid #ccc;
  }
  .add {
    border: 0.2rem solid #ccc;
  }
  .add-option {
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    button {
      height: 3rem;
      width: 8rem;
      margin-left: 4rem;
      border: 0.2rem solid #ccc;
      background-color: #eee;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 0.4rem #aaa;
      }
    }
  }
  .add-item {
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    background-color: #eee;
    cursor: pointer;
    > span {
      font-size: 1.6rem;
    }
  }
  footer {
    position: relative;
    height: 6rem;
    margin-top: 3rem;
    line-height: 6rem;
    .btn-box {
      position: absolute;
      right: 2rem;
      display: inline-block;
    }
    .xuanze {
      position: absolute;
      left: 0.5rem;
      top: 5rem;
    }
    .el-input {
      position: absolute;
      left: 10.5rem;
      top: 5rem;
      width: 30rem;
    }
    .save,
    .issue {
      width: 10rem;
      height: 3rem;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;

      line-height: 100%;
      color: #777;
      border: 0.1rem solid #aaa;
      border-radius: 0.2rem;
      background-color: #fff;
      cursor: pointer;
    }
    .save:hover {
      box-shadow: 0 0 0.5rem #aaa;
    }
    .issue {
      margin-left: 4rem;
      color: #fff;
      border: 0.1rem solid #1e90ff;
      background-color: #1e90ff;
      &:hover {
        box-shadow: 0 0 0.5rem #1e90ff;
      }
    }
  }
  .ratioCheck {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    margin: 1rem 0 1rem;
    .el-checkbox {
      margin-right: 3rem;
    }
  }
  .randomTip {
    color: red;
    font-size: 0.8rem;
    line-height: 2;
  }
  .ratioInput {
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    span {
      line-height: 2.5rem;
      width: 25%;
    }
    .el-input,
    .el-select {
      width: 60%;
    }
  }
  .ju {
    .el-checkbox {
      margin-bottom: 1rem;
    }
    .input {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      p {
        width: 50%;
        text-align: center;
        margin-bottom: 1rem;
      }
      .el-input {
        width: 50%;
      }
    }
    .con {
      display: flex;
      justify-content: space-around;
      text-align: center;

      .el-input {
        margin-top: 1rem;
      }
      .left,
      .right {
        margin-top: 1rem;
        width: 45%;
      }
    }
  }
}
</style>
