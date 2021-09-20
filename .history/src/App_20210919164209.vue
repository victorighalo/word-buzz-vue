<template>
  <GameContainer/>
</template>

<script>
import './assets/styles.scss'
import GameContainer from './components/GameContainer.vue'

export default {
  name: 'App',
  components: {
    GameContainer
  }
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
</style>
