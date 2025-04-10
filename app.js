const url ="http://numbersapi.com/random/math?json"
const factpara = document.querySelector(".board")
const btn = document.querySelector("#btn")
const conclu = document.querySelector("#conclusion")

let getfacts = async()=>{
    console.log("getting data ....")
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data.text
    factpara.style.size="12px"
    let conclusion = setTimeout(()=>{
       conclu.innerText ="click on above button"
    },500);
};
btn.addEventListener("click",getfacts);