(function () {
  // build vars 
  var numberOfQuestion = 4,
    allClickedMessage = 'You\'ve clicked on all available questions...',
    initMessage = 'Click a question to get started...',
    continousMessage = 'What else would you like to know...';
  data = data;
  // jquery, lol
  function $(elem) {
    var elem = document.querySelectorAll(elem);
    if (elem.length === 1) return elem[0];
    else return elem;
  }
  var messages = {
    container: $('div.questions-bot-container ul'),
    questions: data,
    cue: [],
    complete: data,
    init: false,
    message: function (text, type, animation) {
      var elem = document.createElement('li');
      elem.classList.add(type);
      elem.innerText = text
      elem.classList.add('animated');
      elem.classList.add(animation);
      this.container.appendChild(elem);
    },
    answer: function (num) {
      var question = this.cue[num];
      this.container.innerHTML = '';
      this.message(question.question, 'ask', 'fadeIn');
      this.container.appendChild(this.blank());
      this.message(question.answer, 'answer', 'fadeIn');
      this.container.appendChild(this.blank());
      if (question.next) {
        this.cue.splice(num, 1, question.next);
      } else if (this.questions[0]) {
        this.cue.splice(num, 1, this.questions[0]);
        this.questions.splice(0, 1);
      } else {
        this.cue.splice(num, 1);
      }
      this.load();
    },
    blank: function () {
      return document.createElement('li');
    },
    clear: function () {
      this.container.innerHTML = '';
    },
    loadCue: function () {
      for (var x = 0; x < numberOfQuestion; x++) {
        if (this.questions[0]) {
          this.cue.push(this.questions[0]);
          this.questions.splice(0, 1);
        }
      }
    },
    loadQuestions: function () {
      for (var x = 0, max = this.cue.length; x < max; x++) {
        var question = this.cue[x];
        var message = document.createElement('li');
        message.classList.add('question');
        message.classList.add('animated');
        if (x % 2 == 0) message.classList.add('slideInLeft');
        else message.classList.add('slideInRight');
        message.innerText = question.question;
        message.setAttribute('data-num', x);
        this.container.appendChild(message);
        message.onclick = function () {
          var num = this.getAttribute('data-num');
          num = parseInt(num);
          messages.answer(num);
        }
      }
    },
    disclaimer: function () {
      var text = '';
      var elem = document.createElement('li');
      elem.classList.add('msg');
      elem.classList.add('animated');
      elem.classList.add('reset');
      if (!this.init) {
        elem.classList.add('pulse');
        elem.classList.add('infinite');
        if (text === '') text = initMessage;
      } else if (this.cue.length === 0) {
        text = allClickedMessage;
        elem.onclick = function() {
          messages.init = false;
          messages.cue = [];
          messages.questions = messages.complete;
          messages.complete = [];
          messages.clear();
          messages.load();
        }
      } else {
        elem.classList.add('fadeIn');
        if (text === '') text = continousMessage;
      }
      elem.innerText = text;
      this.container.appendChild(elem);
    },
    load: function () {
      var disclaimerText = '';
      if (!this.init) this.loadCue();
      if (this.cue.length > 0) this.loadQuestions();
      this.disclaimer();
      this.init = true;
    }
  }
  messages.clear();
  messages.load();
})();