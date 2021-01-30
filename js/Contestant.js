class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantRef = database.ref('contestantCount');
      contestantRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestantCount" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value",(data)=>{
        allcontestants = data.val();
      })
    }
  }