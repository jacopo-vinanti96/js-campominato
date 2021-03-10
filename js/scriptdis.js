// Genera un numero casuale
function genRandomNum( max, min ) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Controllo se il numero è uguale ai precedenti
function numControl( array, num ) {
  for ( var j = 0; j < array.length; j++ ) {
    if ( num == array[j] ) {
      return true;
    }
  }
  return false;
}

function displayBtn (btnMaxValue, htmlElement) {
  for ( var i = 1; i < btnMaxValue + 1; i++ ) {
    htmlElement.innerHTML += "<input type=\"checkbox\" name=\"button\" class=\"btn\" onclick=\"btnValue()\" value = " + i + ">" + "</input>" + "<span class=\"checkbox-number\">" + i + "</span>";
  }
}

// Dichiarazione variabili
var bombs = [],
maxNum = 100,
minNum = 1,
nBombe = 16;
output = document.getElementById('output'),
containerBtn = document.getElementById('buttons-container');
userNum = 0,
userNumList = [],
boom = new Audio('audio/oooh.mp3'),
kids = new Audio('audio/hurray.mp3');

// Onclick inizia la funzione
function startGame() {


  // Selezione livello e relativi controlli
  var level = parseInt( prompt("INSERISCI: \n0 = livello facile \n1 = livello normale \n2 = livello difficile") );
  while ( level < 0 || level > 2 || isNaN( level ) ) {
    level = parseInt( prompt("Il valore inserito non è valido \nINSERISCI: \n0 = livello difficile \n1 = livello normale \n2 = livello facile") );
  }
  if ( level == 1 ) {
    maxNum = 80;
  } else if ( level == 2 ) {
    maxNum = 50;
  }

  // Ciclo for per generare i numeri con un ciclo for e per controllare che sia diverso dagli altri numeri tramite funzioni
  for ( var i = 0; i < nBombe; i++ ) {
    if ( bombs.length > 0 && numControl( bombs, bombs[i] ) == true ) {
      i -= 1;
    }
    bombs[i] = genRandomNum( maxNum, minNum );
  }
  console.log("Numeri bomba: " + bombs);

  displayBtn(maxNum, containerBtn);
}

function btnValue() {
  if ( userNumList.length < maxNum - nBombe ) {
    var generatedButtonsHTML = document.querySelectorAll('.btn');
    var buttonValue = 0;
    var i = 0;
    var clicked = false;
    var userLose = false;

    for ( i = 0; generatedButtonsHTML < maxNum; i++) {
      if ( generatedButtonsHTML[i].checked == true ) {
        buttonValue = generatedButtonsHTML[i].value
        if ( numControl( bombs, buttonValue ) == true ) {
          return output.innerHTML = "Hai perso... Punteggio: " + userNumList.length;
        } else {
          generatedButtonsHTML[i].classList.add("clicked");
        }
      }
    }

    userNumList.push(buttonValue);
    console.log(userNumList);

  } else if ( userNumList.length == maxNum - nBombe ) {
    kids.play();
    return output.innerHTML = "Hai vinto!! Complimenti!!";
  }
}
