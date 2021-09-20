<template>
  <div class="game">

 <div class="container">
   <div class="header">
     <h3>Word Buzz Game</h3>
   </div>
   <div class="content">
     <div class="players" v-if="!uiProps.gameStarted">
       <div>
         <h5>Player One</h5>
         <input type="text" v-model="uiProps.playerOne.name">
       </div>
       <div>
         <h5>Player Two</h5>
         <input type="text" v-model="uiProps.playerTwo.name">
       </div>
       <button @click="startGame">Start</button>
     </div>
     <div v-if="!uiProps.gameStarted">
      <div class="question"  v-if="!uiProps.gameStarted">
        <form action="">
          <div>
            <label for="question">Secret Question</label>
            <input type="text" v-model="uiProps.question.value">
          </div>
          <div>
            <label for="question">Question Hint</label>
            <input type="text" v-model="uiProps.question.hint">
          </div>
      
        </form>
      </div>
     </div>
      
   </div>
      </div>
      </div>
      </template>
        
<script>
  import { GameState } from "../data";
export default {
  name: 'Game',
  props: {
    msg: String
  },
  data: GameState,
  methods:{
  startGame(){
    if(this.playersReady){
      this.uiProps.gameStarted = true
    }else{
      alert('Enter Players name')
    }
  }
  },
  computed: {
    playersReady(){ return this.uiProps.playerOne.name.length > 0 && this.uiProps.playerTwo.name.length > 0 }
    
  }
}
</script>