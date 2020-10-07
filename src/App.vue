<template>
  <div id="app">
    <h1>
      <router-link to="/process-mining/workspaces">去 Workspace</router-link>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app h1 > a {
  color: #00bce6;
  transform: all .4s;
}
#app h1 > a:hover {
  color: #009dc0;
}
</style>
