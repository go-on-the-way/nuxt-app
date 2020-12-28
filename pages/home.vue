<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.el-header,
.el-footer {
  height: 60px;
  color: #333;
  text-align: center;
  background-color: #b3c0d1;
}

.el-main {
  height: calc(100vh - 120px);
  color: #333;
  text-align: center;
  background-color: #e9eef3;
}
</style>
