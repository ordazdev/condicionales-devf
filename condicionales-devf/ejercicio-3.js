// 3. Crear un programa que determine si un número
// introducido en un Prompt es par o no,
// la respuesta será mostrada en un Alert.

const numero = parseInt(prompt("Ingresa un número:"));
if (numero % 2 === 0) {
  alert(numero + " es par");
} else {
  alert(numero + " no es par");
}
