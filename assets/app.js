(function () {
  // jquery, lol
  function $(elem) {
    var elem = document.querySelectorAll(elem);
    if (elem.length === 1) return elem[0];
    else return elem;
  }
  var messages = {
    elem: $('div.questions-bot-container ul'),
    questions: data,
    cue: [],
    init: false,
    answer: function (num) {
      var question = this.cue[num];
      this.elem.innerHTML = '';
      var questionElem = document.createElement('li');
      questionElem.classList.add('ask');
      questionElem.innerText = question.question;
      questionElem.classList.add('animated');
      questionElem.classList.add('fadeIn');
      var answerElem = document.createElement('li');
      answerElem.classList.add('answer');
      answerElem.innerText = question.answer;
      answerElem.classList.add('animated');
      answerElem.classList.add('fadeIn');
      this.elem.appendChild(questionElem);
      this.elem.appendChild(this.blank());
      this.elem.appendChild(answerElem);
      this.elem.appendChild(this.blank());
      if (this.questions[0]) this.cue.splice(num, 1, this.questions[0]);
      else this.cue.splice(num, 1);
      this.questions.splice(0, 1);
      this.load();
    },
    blank: function () {
      return document.createElement('li');
    },
    clear: function () {
      this.elem.innerHTML = '';
    },
    load: function () {
      if (!this.init) {
        for (var x = 0; x < 4; x++) {
          if (this.questions[0]) {
            this.cue.push(this.questions[0]);
            this.questions.splice(0, 1);
          }
        }
      }
      for (var x = 0, max = this.cue.length; x < max; x++) {
        var question = this.cue[x];
        var message = document.createElement('li');
        message.classList.add('question');
        message.classList.add('animated');
        if (x % 2 == 0) message.classList.add('slideInLeft');
        else message.classList.add('slideInRight');
        message.innerText = question.question;
        message.setAttribute('data-num', x);
        this.elem.appendChild(message);
        message.onclick = function () {
          var num = this.getAttribute('data-num');
          num = parseInt(num);
          messages.answer(num);
        }
      }
      // bottom message
      var disclaimer = document.createElement('li');
      disclaimer.classList.add('msg');
      disclaimer.classList.add('animated');
      if (!this.init) {
        disclaimer.classList.add('pulse');
        disclaimer.classList.add('infinite');
        disclaimer.innerText = 'Click a question to get started...';
      } else {
        disclaimer.classList.add('fadeIn');
        disclaimer.innerText = 'What else would you like to know...';
      }
      this.elem.appendChild(disclaimer);
      this.init = true;
    }
  }
  messages.clear();
  messages.load();
})();