const url = "http://numbersapi.com/random/math?json";
const factpara = document.querySelector(".board");
const btn = document.querySelector("#btn");
const conclu = document.querySelector("#conclusion");
let getfacts = async () => {
  console.log("Getting data...");
  let response = await fetch(url);
  let data = await response.json();
  factpara.innerText = data.text;

  setTimeout(() => {
    conclu.innerText = "Click on above button";
  }, 500);
};
btn.addEventListener("click", getfacts);
