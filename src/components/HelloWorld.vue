<template>
  <div>
      <img src="../assets/logo.png">
      <h2>{{msg}}</h2>
      <form @submit.prevent>
          <div class="form-group">
              <label for="exampleInputEmail1">用户名</label>
              <input type="text" v-model="inputmsg" class="form-control" id="exampleInputEmail1" placeholder="用户名">
          </div>
          <div class="form-group">
              <label for="exampleInputPassword1">密&nbsp;&nbsp;码</label>
              <input type="password" v-model="inputpass" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button @click="login" class="btn btn-primary">登录</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      inputmsg: '',
      inputpass: ''
    }
  },
  methods: {
    login () {
      if (this.inputpass !== '' && this.inputmsg !== '') {
        this.$router.replace('/home')
      } else {
        this.msg = '账号或密码不能为空！'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input.form-control{
    width: 500px;
    margin: 0 auto;
}
</style>
