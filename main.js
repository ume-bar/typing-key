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
    paddingLeft: [0, 20, 35, 50, 65],
    questions: ["large mouth bass",
      "sea bass",
      "bule gill",
      "small mouth bass",
      "gold fish",
      "wakasagi",
      "cat fish",
      "back crash",
      "carp",
      "cast"],
    question: "",
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
  mounted() {
    let i = Math.floor(Math.random() * 10);
    this.question = this.questions[i];
    document.addEventListener("keydown", this.onKeyDown);
  },
});
