export const GameState = function () {
    return {
        uiProps: {
            playerOne:{
            name:'',
            id:0,
            },
            playerTwo:{
            name:'',
            id:1
            },
            gameStarted:false,
            questions: [],
            question:{
                value:'',
                hint:''
            },
            answer:'',
            maxAnswersCount: 20,
            currentQuestionKey: null,
            gameOver: false,
    }
}
}