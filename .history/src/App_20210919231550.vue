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

.mb{
    margin-bottom: 30px !important; 
}
.mt{
    margin-top: 30px !important;
}
label{
  display: block;
  text-align: left;
}
button {
    padding: 10px 20px;
    border-radius: 6px;
    border-width: 2px;
    border-style: solid;
    font-size: 20px;
    cursor: pointer;
    background: #fff;
        color: #333;
        border-color: #333;
    transition: 0.25s ease;
}
button:hover{
        background: #333;
        color: #fff;
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
    justify-content: space-around;
    align-items: center;   
    flex-direction: row;
    height:90%
}
.game > .container > .header{
margin-bottom: 60px;
}
.game > .container{
        width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    }
    .game > .gameover{
        width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    }
.players > div{
        margin-bottom: 30px !important; 
        text-align: left;
}
</style>
