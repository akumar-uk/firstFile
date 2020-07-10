const select = document.querySelector("select");
const box = document.querySelector(".box");

//////////// DATAS

const data = [
  { letter: "A", text: "A for Apple" },
  { letter: "B", text: "B for Ball" },
  { letter: "C", text: "C for Cat" },
  { letter: "D", text: "D for Dog" },
];

////////// CREATE BOXES

data.forEach((all) => {
  const { letter, text } = all;

  const div = document.createElement("div");
  div.classList.add("div");

  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  h1.innerText = letter;

  div.addEventListener("click", () => {
    sayIt(text);
    speakIt();
  });

  div.appendChild(h1);
  box.appendChild(div);
});

////////////// SELECT VOICE OPTION

const getVos = () => {
  let allvoices = speechSynthesis.getVoices();
  allvoices.forEach((n) => {
    const option = document.createElement("option");
    option.innerText = `${n.name} ${n.lang}`;
    option.value = n.name;
    select.appendChild(option);
  });
};
speechSynthesis.addEventListener("voiceschanged", getVos);

getVos();
//////////// sayIt

const msg = new SpeechSynthesisUtterance();

const sayIt = (text) => {
  msg.text = text;
};

//////// speak it

const speakIt = () => {
  speechSynthesis.speak(msg);
};

/////// select option

const setVoice = (e) => {
    let al = speechSynthesis.getVoices();
  msg.voice = al.find((v) => v.name === e.target.value);
};

select.addEventListener("change", setVoice);
