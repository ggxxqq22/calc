<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: { test() {console.log(this.$router)} },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
  }
}
#app {
  width: 100%;
  height: 100%;
}
</style>
