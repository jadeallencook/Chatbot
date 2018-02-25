const data = [{
  question: "What is Question Bot?",
  answer: "Question Bot helps readers find content faster. See how fast you found this!",
  next: {
    question: "How can I use Question Bot?",
    answer: "You can either follow the instructions on the GitHub page or contact jadeallencook@gmail.com for assistance.",
    next: false
  }
}, {
  question: "Who made Question Bot?",
  answer: "Question Bot was made by Jade Allen Cook for Deseret News to help subscribers become more engaged.",
  next: {
    question: "Who is Jade Allen Cook",
    answer: "Jade Allen Cook is a software developer and digital artist in the United States.",
    next: {
      question: "Can you help me with my idea?",
      answer: "If you need help with an online interactive; please email jadeallencook@gmail.com or Slack me!",
      next: false
    }
  }
}, {
  question: "Why should I use Question Bot?",
  answer: "Question Bot allows your readers to learn your content faster and easier.",
  next: false
}]