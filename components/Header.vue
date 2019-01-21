<template>
  <div class="component-header">
    <header-logo />
    <header-search />
    <header-nav />
  </div>
</template>
<script>
import HeaderLogo from './Logo'
import HeaderSearch from './Search'
import HeaderNav from './Nav'

export default {
  components: {
    HeaderLogo,
    HeaderSearch,
    HeaderNav
  }
}
</script>

<style scoped>
  .component-header {
    padding: 5px;
    background: #444;
    font-size: 13px;
  }
</style>
