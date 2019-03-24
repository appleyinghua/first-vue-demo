<template>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li class="active"><a class="navbar-brand" href="#">连接 <span class="sr-only">(current)</span></a></li>
                <li><a class="navbar-brand" href="#">主页</a></li>
                <li><a class="navbar-brand" href="#">退出</a></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'aside-head'
}
</script>

<style scoped>
ul.navbar-nav {
    flex-direction: row;
    margin-left: 600px;
}
nav.navbar{
    background: lavenderblush;
}
</style>
