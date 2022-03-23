const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll("#res");
const comecar = document.getElementById("comecar")
const greenBar = document.getElementById("pBar").children[0];
var placard = document.getElementById("placard");
var erro = document.getElementById("erros");
var acerto = document.getElementById("acertos");
var placar = 0, counter = 0, err = 5, acer = 0;
var btn = document.getElementById("btn");


var activeCard;

comecar.addEventListener("click", ()=>{
  cards[0].classList.remove("active")
  cards[1].classList.add("active")
})



function mudar(){
    cards[1].classList.remove("active");
  cards[1].nextElementSibling.classList.add("active");
  
  greenBar.style.width = "20%"
  
}



function mudar1(){
  cards[2].classList.remove("active");
  cards[2].nextElementSibling.classList.add("active");
  
  greenBar.style.width = "40%"
}

function mudar2(){
    cards[3].classList.remove("active");
  cards[3].nextElementSibling.classList.add("active");
  
  greenBar.style.width = "60%"
}

function mudar3(){
    cards[4].classList.remove("active");
  cards[4].nextElementSibling.classList.add("active");
  
  greenBar.style.width = "80%"
}

function mudar4(){
    cards[5].classList.remove("active");
  cards[5].nextElementSibling.classList.add("active");
  
  greenBar.style.width = "100%"
}

buttons[0].addEventListener("click", () => {
  
  placar += 20;
  acer += 1;
  err -= 1;
  acerto.innerHTML = acer;
  erro.innerHTML = err;

  console.log(`${placar}%`);
  console.log(acer+""+err);
  
})

buttons[1].addEventListener("click", () => {
  
  placar += 20;
  acer += 1;
  err -= 1;
  acerto.innerHTML = acer;
  erro.innerHTML = err;

  console.log(`${placar}%`);
  console.log(acer+""+err);
  
})

buttons[2].addEventListener("click", () => {
  
  placar += 20;
  acer += 1;
  err -= 1;
  acerto.innerHTML = acer;
  erro.innerHTML = err;

  console.log(`${placar}%`);
  console.log(acer+""+err);
  
})

buttons[3].addEventListener("click", () => {
  
  placar += 20;
  acer += 1;
  err -= 1;
  acerto.innerHTML = acer;
  erro.innerHTML = err;

  console.log(`${placar}%`);
  console.log(acer+""+err);
  
})

buttons[4].addEventListener("click", () => {
  
  placar += 20;
  acer += 1;
  err -= 1;
  acerto.innerHTML = acer;
  erro.innerHTML = err;

  console.log(`${placar}%`);
  console.log(acer+""+err);
})

placar += 0;
//acer += 0;
//err -= 0;

//acerto.innerHTML = acer;
//erro.innerHTML = err;


setInterval(()=>{
    if(counter == placar){
      clearInterval();
    }else{
      counter++;
      placard.innerHTML = `${counter}%`;
    }
  }, 100)

switch(placar){
  case placar == 20:
    erro.innerHTML = "4";
    acerto.innerHTML = "1";
  alert("acerto")
  break;
}















