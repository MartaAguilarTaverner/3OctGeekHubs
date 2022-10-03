const insertDay = prompt("Introduce un día de la semana").toLowerCase();

switch (insertDay) {
    case "saturday":
    case "sunday":
        console.log("No es un día laborable");
        break;
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "Friday":
        console.log("Es un día laborable");
        break;
    default:
        console.log("Eso no es un día de la semana");
        break;
}
