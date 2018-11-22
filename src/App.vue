<template>
  <div id="app">
    <NavBar></NavBar>
    <Employee></Employee>

  </div>
</template>

<script>
import Employee from './components/Users/Employee.vue'
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'
import HRDirector from './components/Users/HRDirector.vue'
import Manager from './components/Users/Manager.vue'

export default {
    name: 'app',
    components: {
        Login,
        NavBar,
        Employee,
        Manager,
        HRDirector,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<!-- Test if user is connected-->