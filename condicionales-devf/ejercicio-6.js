// 6. Solicitar al usuario que ingrese tres números y
// mostrar cuál de los tres es el número mayor.
// Considerar el caso en que 2 números sean iguales.

const num1 = parseInt(prompt("Ingresa el primer número:"));
const num2 = parseInt(prompt("Ingresa el segundo número:"));
const num3 = parseInt(prompt("Ingresa el tercer número:"));
if (num1 >= num2 && num1 >= num3) {
  alert(num1 + " es el mayor");
} else if (num2 >= num1 && num2 >= num3) {
  alert(num2 + " es el mayor");
} else {
  alert(num3 + " es el mayor");
}
