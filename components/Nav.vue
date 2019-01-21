<template>
  <ul class="component-nav">
    <li>
      <nuxt-link to="/">
        首页
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        新手入门
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        API
      </nuxt-link>
    </li>
    <li>
      <nuxt-link to="/">
        关于
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {}
</script>

<style lang="stylus">
  .component-nav
    display flex
    width 80%
    margin 15px auto
    list-style none
    li
      flex 1
      a
        display block
        padding 3px 0
        color #ccc
        text-align center
        text-decoration none
</style>
