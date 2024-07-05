// 11.	Realizar un programa que ayude a calcular el total a
// pagar de acuerdo a la distancia recorrida por un vehículo con
// cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20,
// si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total,
// si es mayor la cantidad de litros consumidos se ha de añadir 10 al total.
// Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.

const tipoVehiculo = prompt(
  "Introduce el tipo de vehículo (coche, moto, autobús):"
).toLowerCase();
const kmsRecorridos = parseFloat(
  prompt("Introduce los kilómetros recorridos:")
);
const litrosConsumidos = parseFloat(
  prompt("Introduce los litros de combustible consumidos:")
);

const preciosPorKilometro = {
  coche: 0.2,
  moto: 0.1,
  autobús: 0.5,
};

const precioKilometro = preciosPorKilometro[tipoVehiculo] || 0;

const costoViaje = precioKilometro * kmsRecorridos;
let extraPorLitros = litrosConsumidos > 100 ? 10 : 5;

if (litrosConsumidos <= 0) {
  extraPorLitros = 0;
}

const totalAPagar = costoViaje + extraPorLitros;

alert("El total a pagar es: " + totalAPagar + " euros.");
