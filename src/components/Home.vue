<template>
<div class="container">
    <user></user>
    <aside-head></aside-head>
    <menu-left></menu-left>
</div>
</template>

<script>
import User from '../views/User'
import AsideHead from '../views/AsideHead'
import MenuLeft from '../views/MenuLeft'
export default {
  name: 'home',
  components: {
    MenuLeft,
    User,
    AsideHead,
    'user': User,
    'aside-head': AsideHead,
    'menu-left': MenuLeft
  }
}
</script>

<style scoped>
div {
    font-size: 20px;
    color: darkturquoise;
}
</style>
