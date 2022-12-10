/*global Vue*/
var app = new Vue({
  el: "#app",
  data: {
    key: "",
    keyCode: 0,
    keys: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "^", "¥"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "@", "["],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", ":", "]"],
    ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "_"],
    ["Space", "Enter"]],
    // paddingLeft: [0, 20, 35, 50, 65],
    // questions: ["large mouth bass",
    //   "sea bass",
    //   "bule gill",
    //   "small mouth bass",
    //   "gold fish",
    //   "wakasagi",
    //   "cat fish",
    //   "back crash",
    //   "carp",
    //   "cast"],
    paddingLeft: [0, 8, 16, 32, 60],
    questions: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"],
    question: "",
    score: 0,
    answer: "",
    x: 0,
  },
  methods: {
    onKeyDown(event) {
      this.key = event.key.toUpperCase();
      this.keyCode = event.keyCode;
      if (this.keyCode == 32) {
        this.key = "Space";
      } else if (this.keyCode == 13) {
        this.key = "Enter";
      }
      if (this.y == this.question.toUpperCase()) {
        this.score += 100;
      } else {
        this.score -= 50;
      }
    },
    keyWidth(key) {
      if (key == "Space") {
        return "320px";
      } else if (key == "Enter") {
        return "80px";
      }
      return undefined;
    },
  },
  // 引数で受け取ったものは毎回更新されない。
  mounted() {
    this.question = this.questions[Math.floor(Math.random() * this.questions.length)];
    setInterval(() => {
      this.question = this.questions[Math.floor(Math.random() * this.questions.length)];
      if (this.x == -600) {
        this.x = 600;
      } else {
        this.x = -600;
      }
    }, 3000);
    document.addEventListener("keydown", this.onKeyDown);
  },
});
