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
var btnMaxValue = 5,
htmlElement = document.getElementsById('main');
function genBtn (btnMaxValue, htmlElement) {
  for ( var i = 1; i == btnMaxValue; i++ ) {
    htmlElement.innerHTML += "<button class=\"btn\" value = " + i + ">" + i + "</button>";
  }
}
