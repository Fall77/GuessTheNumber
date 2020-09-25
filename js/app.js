//Number generator
var success = document.getElementById("success");
var alerta = document.getElementById("alert");
var showfails = document.getElementById("errores2");
var info = document.getElementById("info");
var surrender = document.getElementById("surrender");
var regular = document.getElementById("regularNumber");
var good = document.getElementById("goodNumber");

var cantidadNumeros = 4;
var correctNumber = [];
document.getElementById('button1').addEventListener("click", function(){
  while(correctNumber.length < cantidadNumeros ){
    var numeroAleatorio = Math.floor(Math.random()*9);
    var existe = false;
    for(var i=0;i<correctNumber.length;i++){
      if(correctNumber [i] == numeroAleatorio){
          existe = true;
          break;
      }
    }
      if(!existe){
      correctNumber[correctNumber.length] = numeroAleatorio;
      }
  }
  info.classList.remove("d-none");
  info.classList.add("d-inline");
  info.innerHTML = "Number generated";
  success.classList.remove("d-inline");
  success.classList.add("d-none");
  showfails.classList.remove("d-inline");
  showfails.classList.add("d-none");
  alerta.classList.remove("d-inline");
  alerta.classList.add("d-none");
  surrender.classList.remove("d-inline");
  surrender.classList.add("d-none");
});

//console.log(correctNumber)

//End number generator

//Preventing/validating more than 1 digit per input and only numbers
var numInp1 = document.querySelector('#a')

a.addEventListener('keypress', function(evento){
    var tecla = evento.keyCode || evento.charCode
    if(tecla < 48||tecla >57 || a.value.length > 0){
        evento.preventDefault()
    }
})

var numInp2 = document.querySelector('#b')

b.addEventListener('keypress', function(evento){
    var tecla = evento.keyCode || evento.charCode
    if(tecla < 48||tecla >57 || b.value.length > 0){
        evento.preventDefault()
    }
})

var numInp3 = document.querySelector('#c')

c.addEventListener('keypress', function(evento){
    var tecla = evento.keyCode || evento.charCode
    if(tecla < 48||tecla >57 || c.value.length > 0){
        evento.preventDefault()
    }
})

var numInp4 = document.querySelector('#d')

d.addEventListener('keypress', function(evento){
    var tecla = evento.keyCode || evento.charCode
    if(tecla < 48||tecla >57 || d.value.length > 0){
        evento.preventDefault()
    }
})

//End validation

//Check Numbers
var acumfails = [];

var firstValue = document.getElementById("a");
var secondValue = document.getElementById("b");
var thirdValue = document.getElementById("c");
var fourthValue = document.getElementById("d");

var fails = 0;

function insert(){
  acumfails.push(firstValue.value,secondValue.value,thirdValue.value,fourthValue.value);
  clear();
}
 function clear(){
   firstValue.value = "";
   secondValue.value = "";
   thirdValue.value = "";
   fourthValue.value = "";
 }
 var regularNumbers = 0;
 var goodNumbers = 0;

document.getElementById("button2").addEventListener("click",() => {
  //regular numbers
  if (document.getElementById("a").value == correctNumber[0]+1 || 
      document.getElementById('a').value == correctNumber[0]-1){
      regularNumbers = regularNumbers + 1;
    }
  if (document.getElementById("b").value == correctNumber[1]+1 || 
      document.getElementById('b').value == correctNumber[1]-1){
      regularNumbers = regularNumbers + 1;
  }
  if (document.getElementById("c").value == correctNumber[2]+1 || 
      document.getElementById('c').value == correctNumber[2]-1){
      regularNumbers = regularNumbers + 1;
    }
  if (document.getElementById("d").value == correctNumber[3]+1 || 
      document.getElementById('d').value == correctNumber[3]-1){
      regularNumbers = regularNumbers + 1;
  }
  //good numbers
  if (document.getElementById("a").value == correctNumber[0]){
    goodNumbers = goodNumbers + 1;
  }
  if (document.getElementById("b").value == correctNumber[1]){
    goodNumbers = goodNumbers + 1;
  }
  if (document.getElementById("c").value == correctNumber[2]){
    goodNumbers = goodNumbers + 1;
  }
  if (document.getElementById("d").value == correctNumber[3]){
    goodNumbers = goodNumbers + 1;
  }
  regular.innerHTML = "Regular numbers: " + regularNumbers;
  good.innerHTML = "Good Numbers: " + goodNumbers;
  regular.classList.remove("d-none");
  regular.classList.add("d-inline");
  good.classList.remove("d-none");
  good.classList.add("d-inline");
  regularNumbers = 0;
  goodNumbers = 0;

  if  (document.getElementById("a").value == correctNumber[0] && 
       document.getElementById("b").value == correctNumber[1] &&
       document.getElementById("c").value == correctNumber[2] &&
       document.getElementById("d").value == correctNumber[3]) {
      alerta.classList.remove("d-inline");
      alerta.classList.add("d-none");
      success.classList.remove("d-none");
      success.classList.add("d-inline");
      info.classList.remove("d-inline");
      info.classList.add("d-none");
      showfails.classList.remove("d-inline");
      showfails.classList.add("d-none");
      regular.classList.remove("d-inline");
      regular.classList.add("d-none");
      good.classList.remove("d-inline");
      good.classList.add("d-none");
      success.innerHTML = "Success " + correctNumber.join(" - ") + " Attempts: "+ " " + fails;
      correctNumber.splice(0,correctNumber.length);
      clear();
      fails = 0;
      showfails.textContent = "";
    } else {
        info.classList.remove("d-inline");
        info.classList.add("d-none");
        alerta.classList.remove("d-none");
        alerta.classList.add("d-inline");
        alerta.innerHTML = "Still missing a few numbers";
        insert();
        fails = fails + 1;
        document.getElementById("errores2").classList.add("d-inline");
        showfails.innerHTML += "Attempt "+ fails +"°: "+ acumfails.join(" - ") + "<br>";
      }
      acumfails.splice(0,acumfails.length);
    }
  )
//End Check

//Surrender
document.getElementById("button3").addEventListener("click",() => {
  surrender.innerHTML = "The number was: " + correctNumber.join(" - ");
  correctNumber.splice(0,correctNumber.length)
      clear();
      showfails.textContent = "";
      fails = 0;
      surrender.classList.remove("d-none");
      surrender.classList.add("d-inline");
      showfails.classList.remove("d-inline");
      showfails.classList.add("d-none");
      alerta.classList.remove("d-inline");
      alerta.classList.add("d-none");
      info.classList.remove("d-inline");
      info.classList.add("d-none");
      regular.classList.remove("d-inline");
      regular.classList.add("d-none");
      good.classList.remove("d-inline");
      good.classList.add("d-none");
})


