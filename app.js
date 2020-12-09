const synth = window.speechSynthesis;
const voices = synth.getVoices();
let url = "";
const submitBtn = document.querySelector(".submit-btn");
const msgTxt = document.querySelector(".msg-txt");
const yodaBtn = document.querySelector(".yoda");
const sithBtn = document.querySelector(".sith");
const mandoBtn = document.querySelector(".mando");
const mainImg = document.querySelector(".main-img");
const myVoice = voices[45];
const inputTxt = document.querySelector(".input-txt");
const outputTxt = document.querySelector(".output-txt");
const cngBtns = document.querySelectorAll("ul button");

function defaultOp() {
  mainImg.setAttribute("src", "./images/yoda.gif");
  msgTxt.innerText = "May the force be with you";
  url = "https://api.funtranslations.com/translate/yoda.json";
  yodaBtn.style.backgroundColor = "#95ff64";
  mandoBtn.style.backgroundColor = "#ffd7f6";
  sithBtn.style.backgroundColor = "#ffd7f6";
}

defaultOp();

function speakMe() {
  const newUrl = `${url}?text=${inputTxt.value}`;
  fetch(newUrl)
    .then((resp) => resp.json())
    .then((json) => json.contents.translated)
    .then((txt) => {
      outputTxt.innerText = txt;
      var utterThis = new SpeechSynthesisUtterance(txt);
      utterThis.voice = myVoice;
      utterThis.pitch = 0.5;
      utterThis.rate = 0.85;
      synth.speak(utterThis);
    });
}

yodaBtn.addEventListener("click", defaultOp);

sithBtn.addEventListener("click", () => {
  mainImg.setAttribute("src", "./images/sith.gif");
  msgTxt.innerText = "Welcome to the Dark Side";
  url = "https://api.funtranslations.com/translate/sith.json";
  sithBtn.style.backgroundColor = "#ff3e3e";
  mandoBtn.style.backgroundColor = "#ffd7f6";
  yodaBtn.style.backgroundColor = "#ffd7f6";
});

mandoBtn.addEventListener("click", () => {
  mainImg.setAttribute("src", "./images/mando.gif");
  msgTxt.innerText = "There is still hope";
  url = "https://api.funtranslations.com/translate/mandalorian.json";
  mandoBtn.style.backgroundColor = "#ff853e";
  sithBtn.style.backgroundColor = "#ffd7f6";
  yodaBtn.style.backgroundColor = "#ffd7f6";
});
submitBtn.addEventListener("click", speakMe);
