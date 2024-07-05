// 5.	Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.

const numero1 = parseInt(prompt("Ingresa el primer número:"));
const numero2 = parseInt(prompt("Ingresa el segundo número:"));
if (numero1 < numero2) {
  alert(numero1 + " es menor que " + numero2);
} else {
  alert(numero2 + " es menor que " + numero1);
}
