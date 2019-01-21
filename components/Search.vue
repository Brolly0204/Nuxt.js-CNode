<template>
  <div class="search-box">
    <div class="search-input">
      <span class="icon el-icon-search" />
      <input class="text" placeholder="搜索未做。。。" type="text">
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped lang="stylus">
  .search-box
    .search-input
      width 233px
      height 26px
      border-radius 30px
      background-color #fff
      margin 8px auto 5px
      overflow hidden
      padding 3px
      .icon
        font-weight bold
        font-size 18px
        color #666
      .text
        width 200px
        height 100%
        border none
        outline none
</style>
