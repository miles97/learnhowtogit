<template>
  <div id="app">
    <Header></Header>
    <!--<img src="./assets/logo.png">-->
    <Lightt></Lightt>
    <Todo></Todo>
    <!--<HelloWorld></HelloWorld>-->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Lightt from './components/Lightt.vue'
import Footer from './components/Footer.vue'
import Todo from './components/Todo.vue'

export default {
  components: {
    HelloWorld,
    Lightt,
    Footer,
    Header,
    Todo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
