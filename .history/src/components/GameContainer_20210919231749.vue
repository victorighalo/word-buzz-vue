<template>
  <div class="game">

 <div class="container" v-if="!uiProps.gameOver">
   <div class="header">
     <h3>Word Buzz Game</h3>
   </div>
   <div class="content">
     <div class="players" v-if="!uiProps.gameStarted">
       <div class="mb">
         <h5>Player One</h5>
         <input type="text" v-model="uiProps.playerOne.name">
       </div>
       <div class="mb">
         <h5>Player Two</h5>
         <input type="text" v-model="uiProps.playerTwo.name">
       </div>
       <button @click="startGame">Start</button>
     </div>

     <div  class="question__container" v-if="uiProps.gameStarted && nextQuestion === null">
       <h5 class="mb">Hey! {{uiProps?.playerOne?.name}}, Enter your secret word</h5>
      <div class="question">
      
          <div class="mb">
            <label for="question">Secret Word</label>
            <input type="password" v-model="uiProps.question.value">
          </div>
          <div class="mb">
            <label for="question">Word Hint</label>
            <input type="text" v-model="uiProps.question.hint">
          </div>
          <button @click="saveQuestion" >Go!</button>
  
      </div>
     </div>

     <div class="answer__container"  v-if="uiProps.gameStarted && nextQuestion !== null">
        
         <div class="mb">
            <h5 class="mb">Hey! {{uiProps?.playerTwo?.name}}, Take a guess of {{uiProps?.playerOne?.name}}'s secret Word</h5>
            <h5>Word Hint: {{nextQuestion.hint}}</h5>
            <p class="mb">You have {{guessCount}} tries left</p>
            <input type="text" v-model="uiProps.answer">
          </div>
          <button @click="saveAnswer" >Take a guess</button>
       </div>
      
   </div>
   <div class="gameover" v-if="uiProps.gameOver">
     <h3>Game Over</h3>
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
      alert('Hey! You need to enter a secret word and a hint. That\'s how the game works. duh!!!')
      return
    }
    GameModels.question.value = this.uiProps.question.value
    GameModels.question.hint = this.uiProps.question.hint
    GameModels.question.playerId = this.uiProps.playerOne.id
    GameModels.question.answers = []
    GameModels.question.questionKey = this.uiProps.questions.length
    this.uiProps.currentQuestionKey = this.uiProps.questions.length
    this.uiProps.questions.push(GameModels.question)
    console.log(this.uiProps.questions)
    
  },
    saveAnswer(){
if(this.nextQuestion){
  if(this.uiProps.answer.length < 2){
      alert(`Input an answer`)
      return false
    }
  const valid = this.validateAnswer()
  GameModels.answer.playerId = this.uiProps.playerTwo.id
  GameModels.answer.questionKey = this.nextQuestion.questionKey
  GameModels.answer.value = this.uiProps.answer
  this.uiProps.questions[this.nextQuestion.questionKey].answers.push(GameModels.answer)
  if(valid){
    this.uiProps.currentQuestionKey += 1
  }
}
  },
  validateAnswer(){
    if(this.uiProps.questions[this.nextQuestion.questionKey].value.toLowerCase() === this.uiProps.answer){
      alert(`Correct Answer!!!`)
      this.uiProps.answer = ''
      this.uiProps.question.value = ''
      this.uiProps.question.hint = ''
      return true
    }else{
      alert(`Wrong guess!!! You have ${this.guessCount - 1} tries left`)
      this.uiProps.answer = ''
      return false
    }
  }
  },
  computed: {
    playersReady(){ return this.uiProps.playerOne.name.length > 0 && this.uiProps.playerTwo.name.length > 0 },
    questionReady(){ return this.uiProps.question.value.length > 2 && this.uiProps.question.hint.length > 2 },
    nextQuestion(){ 
      let question = null
      if(this.uiProps.currentQuestionKey !== null){
      const cq = this.uiProps.questions[this.uiProps.currentQuestionKey]
      if(!cq){
        return null
      }
        if(cq.answers.length - 1 === this.uiProps.maxAnswersCount){
          question = this.uiProps.questions[this.uiProps.currentQuestionKey+1];
        }else{
          question = cq;
        }
        return question
      }
      return question;
    },
    guessCount(){ 
      if(this.nextQuestion){
        return this.uiProps.maxAnswersCount - this.nextQuestion.answers.length
      }else{
        return 0
      }
    }
  }
}
</script>