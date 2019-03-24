<template>
    <div>
        <ul>
            <li  class="active"><a href="#">Home</a></li>
            <li ><a href="#">Profile</a></li>
            <li ><a href="#">Messages</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'menu-left'
}
</script>

<style scoped>
div {
    position: absolute;
    left: 50px;
    top: 200px;
}
    div>ul {
        list-style: none;
    }
</style>
