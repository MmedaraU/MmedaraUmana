var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');


var app = {
   questions: [
      {
         q: 'How many moons does the Earth have?',
         options: [1, 2, 3, 4],
         answer: 1
      },

      {
         q: 'How many moons does Mercury have?',
         options: [1, 0, 3, 5],
         answer: 2
      },

      {
         q: 'How many moons does Mars have?',
         options: [12, 21, 33, 2],
         answer: 4
      },
      {
         q: 'How many moons does Neptune have?',
         options: [11, 12, 13, 14],
         answer: 4
      },
      {
         q: 'How many moons does Uranus have?',
         options: [11, 12, 27, 28],
         answer: 3
      }
   ],
   index: 0,
   load: function () {
      if (this.index <= this.questions.length - 1) {
         quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
         op1.innerHTML = this.questions[this.index].options[0];
         op2.innerHTML = this.questions[this.index].options[1];
         op3.innerHTML = this.questions[this.index].options[2];
         op4.innerHTML = this.questions[this.index].options[3];
         this.scoreCard();
      }
      else {

         quizBox.innerHTML = "Well Done!!!"
         op1.style.display = "none";
         op2.style.display = "none";
         op3.style.display = "none";
         op4.style.display = "none";
         btn.style.display = "none";
      }
   },
   next: function () {
      this.index++;
      this.load();
   },
   check: function (ele) {

      var id = ele.id.split('');

      if (id[id.length - 1] == this.questions[this.index].answer) {
         this.score++;
         ele.className = "correct";
         ele.innerHTML = "Correct";
         this.scoreCard();
      }
      else {
         ele.className = "wrong";
         ele.innerHTML = "Wrong";
      }
   },
   notClickAble: function () {
      for (let i = 0; i < ul.children.length; i++) {
         ul.children[i].style.pointerEvents = "none";
      }
   },

   clickAble: function () {
      for (let i = 0; i < ul.children.length; i++) {
         ul.children[i].style.pointerEvents = "auto";
         ul.children[i].className = ''

      }
   },
   score: 0,
   scoreCard: function () {
      scoreCard.innerHTML = this.score + "/" + this.questions.length;
   }

}


window.onload = app.load();

function button(ele) {
   app.check(ele);
   app.notClickAble();
}

function next() {
   app.next();
   app.clickAble();
}



