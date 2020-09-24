//Number generator
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
  alert("Number generated")
});

console.log(correctNumber)

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

var fails;
var showfails = document.getElementById("errores2");

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
  alert("Regular numbers: " + regularNumbers);
  alert("Good Numbers: " + goodNumbers);
  regularNumbers = 0;
  goodNumbers = 0;
  
  if  (document.getElementById("a").value == correctNumber[0] && 
       document.getElementById("b").value == correctNumber[1] &&
       document.getElementById("c").value == correctNumber[2] &&
       document.getElementById("d").value == correctNumber[3]) {
      alert("Success " + correctNumber);
      correctNumber.splice(0,correctNumber.length);
      clear();
    } else {
      alert("Still missing a few numbers");
        insert();
        var r = Math.random() * 200;
		    var g = Math.random() * 200;
		    var b = Math.random() * 200;
        document.getElementById("errores2").style.color = 'rgb('+r+','+g+','+b+')';
        showfails.innerHTML += "Errors: " + acumfails.join(" - ") + "<br>";
      }
      acumfails.splice(0,acumfails.length);
    }
  )
//End Check

//Surrender
document.getElementById("button3").addEventListener("click",() => {
  alert(correctNumber[0]+[1]+[2]+[3])
  correctNumber.splice(0,correctNumber.length)
      clear();
})


