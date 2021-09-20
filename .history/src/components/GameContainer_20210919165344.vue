<template>
  <div class="game">

 <div class="container">
   <div class="header">
     <h3>Word Buzz Game</h3>
   </div>
   <div class="content">
     <div class="players">
       <div>
         <h5>Player One</h5>
         <input type="text" v-model="uiProps.playerOne.name">
       </div>
       <div>
         <h5>Player Two</h5>
         <input type="text" v-model="uiProps.playerTwo.name">
       </div>
     </div>
   </div>
      </div>
      </div>
      </template>
        
<script>
  import { GameState } from "../models/";
export default {
  name: 'Game',
  props: {
    msg: String
  },
  data: GameState,
  computed: {
    playersReady() {
      if(this.uiProps.playerOne.name.length > 0 && this.uiProps.playerTwo.name.length > 0)
    }
  }
}
</script>