// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no
// es divisible entre 2”.

const numero = parseInt(prompt("Ingresa un número:"));
if (numero % 2 === 0) {
  alert(numero + " es divisible entre 2");
} else {
  alert(numero + " no es divisible entre 2");
}
