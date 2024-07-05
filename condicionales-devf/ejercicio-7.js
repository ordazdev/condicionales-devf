// 7.	Requerir al usuario que ingrese un día de la semana
// e imprimir un mensaje si es lunes,
// otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo.
// Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

const dia = prompt("Ingresa un día de la semana:").toLowerCase();
if (dia === "lunes") {
  alert("Hoy es lunes, empieza la semana");
} else if (dia === "viernes") {
  alert("Hoy es viernes, casi fin de semana");
} else if (dia === "sábado" || dia === "domingo") {
  alert("Es fin de semana, disfruta!");
} else {
  alert("Es un día normal de la semana");
}
