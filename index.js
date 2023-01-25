
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var counter = 0;

while (counter < numberOfDrumButtons) { //querySelectorAll da un array de todos los elementos disponibles en .drum. ///ir por cada elemento del array.
  document.querySelectorAll(".drum")[counter++].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;//botón presionado (si es el que tiene la w, s, etc)

    makeSound(buttonInnerHTML);  //Añadir música a cada botón y cambiar el color de la letras tras hacer click.
    buttonAnimation(buttonInnerHTML);
  });
}


document.addEventListener("keydown", function(event){ //añadir música con el teclado.
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      break;
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      break;
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      break;
    case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      break;
    case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      break;
    case "l":
        var kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
      break;
    default: console.log(key);
  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
