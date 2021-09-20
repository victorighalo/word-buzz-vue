<template>
  <div class="game">

 <div class="container">
   <div class="header">
     <h3>Word Buzz Game</h3>
   </div>
   <div class="content">
     <div class="players">
       <div>
         <input type="text" v-model="uiProps.playerOne.name">
       </div>
       <div>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: GameState
}
</script>