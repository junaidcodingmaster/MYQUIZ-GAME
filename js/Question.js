class Question {

    constructor() {
      this.button = createButton('Submit');
      this.input = createInput('Enter your name');
      this.input2 = createInput('Enter question number');
      this.title = createElement('h1');
      this.question = createElement('p');
      this.option1 = createElement('p');
      this.option2 = createElement('p');
      this.option3 = createElement('p');
      this.option4 = createElement('p');
    }
    hide(){
      this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();

    }
  
    display(){
      this.title.html("My quiz Game");
      this.title.position(350,0);

      this.question.html("Question:- here is question?")
      this.question.position(150,80);

      this.option1.html("1: option 1");
      this.option1.position(150,100);

      this.option2.html("2: option 2");
      this.option2.position(150,120);

      this.option3.html("3: option 3");
      this.option3.position(150,140);

      this.option4.html("4: option 4");
      this.option4.position(150,160);
      
      this.input.position(150,230);

      this.input2.position(400,230);

      this.button.position(340,300);
      
      this.button.mousePressed(()=>{                                                 
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }