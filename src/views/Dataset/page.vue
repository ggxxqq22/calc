<template>
  <div>
    <div class="title">数据集目录列表</div>
    <section class="dataset-list">
      <el-card class="card" v-for="item in list" :key="item.name">
        <div slot="header" class="clearfix">
          <div class="header">
            <span>{{ item.name }}</span>
            <div class="towash-tag" v-if="item.isClean === 0">待清洗</div>
            <div class="public-type-tag" v-if="item.type === 0">公开</div>
            <div class="no-public-type-tag" v-if="item.type === 1">非公开</div>
            <el-button class="btn" type="text" @click="handleClick(item)"
              >查看详情</el-button
            >
          </div>
        </div>
        <div class="desc text item">{{ item.desc }}</div>
        <div class="email text item">联系方式：</div>
        <div class="text item">{{ item.email }}</div>
        <div class="tag-container">
          <div class="tag" v-for="tag in item.tags" :key="tag">{{ tag }}</div>
        </div>
      </el-card>
    </section>
    <el-dialog title="数据集详情" :visible.sync="DialogVisible" width="50%">
      <div class="dialog-header">
        <div class="dialog-title">{{ nowItem.name }}</div>
        <div class="towash-tag" v-if="nowItem.isClean === 0">待清洗</div>
        <div class="public-type-tag" v-if="nowItem.type === 0">公开</div>
        <div class="no-public-type-tag" v-if="nowItem.type === 1">非公开</div>
      </div>

      <div class="dialog-desc">{{ nowItem.desc }}</div>
      <div class="dialog-email">联系方式：{{ nowItem.email }}</div>
      <div class="dialog-center">
        <el-button type="primary">下载文件</el-button>
        <a :href="href" class="a-email"
          >邮件联系<i class="el-icon-s-promotion"></i
        ></a>
      </div>
      <img src="@/assets/trash.png" alt="" class="dialog-img" />
      <div class="dialog-tag-container">
        <div class="tag" v-for="tag in nowItem.tags" :key="tag">{{ tag }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DialogVisible: false,
      list: [
        {
          name: '6 种类别垃圾分类',
          isClean: 0,
          type: 0,
          desc: '该数据集(dataset-resized)包含了 2307 个生活垃圾图片。数据集的创建者将垃圾分为了 6 个类别，分别是：玻璃、纸、硬纸板、塑料、金属、一般垃圾',
          tags: ['垃圾分类', '图片'],
          email: 'xxxxxx@zju.edu.cn',
          img: 'https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80'
        },
        {
          name: '垃圾短信',
          isclean: 1,
          type: 1,
          desc: '垃圾短信 (Spam Messages，SM) 是指未经过用户同意向用户发送不愿接收的商业广告或者不符合法律规范的短信。随着手机的普及，垃圾短信在日常生活日益泛滥，已经严重的影响到了人们的正常生活娱乐，乃至社会的稳定。据 360 公司 2020 年第一季度有关手机安全的报告提到，360 手机卫士在第一季度共拦截各类垃圾短信约 34.4 亿条，平均每日拦截垃圾短信约 3784.7 万条。大数据时代的到来使得大量个人信息数据得以沉淀和积累，但是庞大的数据量缺乏有效的整理规范； 在面对量级如此巨大的短信数据时，为了保证更良好的用户体验，如何从数据中挖掘出更多有意义的信息为人们免受垃圾短信骚扰成为当前亟待解决的问题。',
          tags: ['数据', '公开', '神经网络'],
          email: 'xxxxxx@zju.edu.cn'
        },
        {
          name: '测试数据集3',
          isclean: 1,
          type: 1,
          desc: '这是一个很长的简介，～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～，很长很长很长很长',
          tags: ['数据', '公开', '神经网络'],
          email: 'xxxxxx@zju.edu.cn'
        },
        {
          name: '测试数据集4',
          isclean: 1,
          type: 1,
          desc: '这是一个很长的简介，～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～，很长很长很长很长',
          tags: ['数据'],
          email: 'xxxxxx@zju.edu.cn'
        }
      ],
      nowItem: {}
    }
  },
  mounted() {},
  methods: {
    handleClick(item) {
      this.nowItem = item
      this.DialogVisible = true
    }
  },
  //style="background-image: url("https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"); background-color: rgb(125, 185, 222);"
  computed: {
    href() {
      let res = 'mailto:'
      if (this.nowItem.email) {
        res += this.nowItem.email
      }
      res += `?subject=${this.nowItem.name}数据集申请`
      return res
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  width: 480px;
  min-height: 280px;
  margin: 10px;
  position: relative;
  .header {
    display: flex;
    align-items: center;
    .btn {
      flex: 1;
      text-align: right;
    }
  }
  .desc {
    height: 40px;
    overflow: hidden;
    display: -webkit-box; //必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
    -webkit-box-orient: vertical; //必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
    -webkit-line-clamp: 2;
  }
  .email {
    font-weight: 500;
  }
  .tag-container {
    display: flex;
    margin-top: 20px;
    position: absolute;
    bottom: 25px;
    .tag {
      width: 60px;
      height: 20px;
      padding-left: 8px;
      position: relative;
      font-size: 12px;
      line-height: 20px;
      background-color: lightgray;
      text-align: center;
      border-radius: 10px;
      margin-right: 10px;
      &::before {
        content: 'o';
        color: gray;
        position: absolute;
        top: 0;
        left: 5px;
      }
    }
  }
}
.text {
  font-size: 14px;
}
.no-public-type-tag {
  width: 40px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: skyblue;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}
.public-type-tag {
  width: 40px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: greenyellow;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}
.towash-tag {
  width: 40px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: orange;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}
.item {
  margin-bottom: 18px;
}
.title {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
}
.dataset-list {
  width: 1040px;
  margin: 20px auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.dialog-header {
  margin-top: -20px;
  display: flex;
  .dialog-title {
    font-weight: 500;
  }
}
.dialog-desc {
  margin: 15px 0;
}
.dialog-email {
  margin: 15px 0;
  font-weight: 500;
}
.dialog-center {
  margin: 30px 0;
  display: flex;
  .a-email {
    display: block;
    width: 100px;
    height: 40px;
    text-align: center;
    margin-left: 20px;
    line-height: 40px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    background-color: #67c441;
  }
}
.dialog-img {
  margin: 20px;
  width: calc(100% - 40px);
}
.dialog-tag-container {
  display: flex;
  margin-top: 20px;
  .tag {
    width: 60px;
    height: 20px;
    padding-left: 8px;
    position: relative;
    font-size: 12px;
    line-height: 20px;
    background-color: lightgray;
    text-align: center;
    border-radius: 10px;
    margin-right: 10px;
    &::before {
      content: 'o';
      color: gray;
      position: absolute;
      top: 0;
      left: 5px;
    }
  }
}
</style>
