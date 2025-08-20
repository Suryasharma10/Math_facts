const url = "http://numbersapi.com/random/math?json";
const factpara = document.querySelector(".board");
const btn = document.querySelector("#btn");
const conclu = document.querySelector("#conclusion");

let getfacts = async () => {
  console.log("Getting data...");
  let response = await fetch(url);
  factpara.innerText = response;

  setTimeout(() => {
    conclu.innerText = "Click on above button";
  }, 2000);
};


btn.addEventListener("click", getfacts);

