class Quiz {
    constructor(){}


    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        });
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      
      async start(){
        if(gameState === 0){
            contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }

      play(){
        textSize(30);
        text("Quiz results", 350,0);
        text("---------------", 351,0);
        contestant.getcontestantInfo();
      }
    
}