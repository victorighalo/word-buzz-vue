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
  height:100vh
}

.mb{
    margin-bottom: 30px !important; 
}
.mt{
    margin-top: 30px !important;
}
button {
    padding: 10px 20px;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    font-size: 20px;
    cursor: pointer;
    transition: 0.25s ease;
}
button:hover{
        background: #333;
}
input {
    padding: 10px 20px;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    font-size: 20px;
    cursor: pointer;
    transition: 0.25s ease;
}
h3{
font-size: 25px;
margin: 0;
}

h5{
    font-size: 20px;
    margin: 0;
    }
.game{
    display: flex;
    justify-content: center;
    align-items: center;   
    flex-direction: row;
}
.game > .container{
        width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.players > div{
        margin-bottom: 30px !important; 
}
</style>
