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

     <div v-if="uiProps.gameStarted">
       <h5>Hey! {{uiProps?.playerOne?.name}}, Enter your secret word</h5>
      <div class="question">
        <form action="" @submit.prevent="saveQuestion" >
          <div>
            <label for="question">Secret Word</label>
            <input type="password" v-model="uiProps.question.value">
          </div>
          <div>
            <label for="question">Word Hint</label>
            <input type="text" v-model="uiProps.question.hint">
          </div>
          <button>Save</button>
      
        </form>
      </div>
     </div>
      
   </div>
      </div>
      </div>
      </template>
        
<script>
  import { GameState } from "../data";
  import { GameModels} from "../models";
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
  },
  saveQuestion(){
    if(!this.questionReady){
      alert('A secret word and hint is required')
      return
    }
    GameModels.question.value = this.uiProps.question.value
    GameModels.question.hint = this.uiProps.question.hint
    GameModels.question.playerId = this.uiProps.playerOne.id
    
    this.uiProps.questions.push(GameModels.question)
  }
  },
  computed: {
    playersReady(){ return this.uiProps.playerOne.name.length > 0 && this.uiProps.playerTwo.name.length > 0 },
    questionReady(){ return this.uiProps.question.value.length > 2 && this.uiProps.question.hint.length > 2 }
    
  },
  watch: {
      uiProps(newQuestions, oldQuestions) {
        console.log(newQuestions, oldQuestions)
      }
    },
}
</script>