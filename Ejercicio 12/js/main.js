const correctPassword = "perrete";

let isCorrect = false;
let tries = 0;

while (!isCorrect && tries < 3) {
    const password = prompt("Introduce la contraseña");

    tries += 1;

    if (password === correctPassword) {
        isCorrect = true;
        console.log("Enhorabuena");
    } else if (tries === 3) {
        console.log("Se han agotado todos los intentos");
    } else {
        console.log("Vuelvelo a intentar");
    }
}
