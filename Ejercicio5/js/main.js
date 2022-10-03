const numberIntro = prompt("Introduce un número");
const numberInt = parseInt(numberIntro);

if (numberInt % 2 === 0) {
    console.log("Es divisible entre dos");
} else {
    console.log("No es divisible entre dos");
}
