// 10.	Un conocido portal de educación en tecnología está ofreciendo
// programas para aprender
// a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada
// cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su
// costo mensual: Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y
// aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al
// usuario cuánto gastaría en total por el curso elegido, tomando
// en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses

const programa = prompt(
  "¿Qué programa te interesa? (Course, Carrera, Master)"
).toLowerCase();
const beca = prompt(
  "¿Tienes alguna beca? (Facebook, Google, Jesua, ninguna)"
).toLowerCase();
let precioMensual;
let duracion;

if (programa === "course") {
  precioMensual = 4999;
  duracion = 2;
} else if (programa === "carrera") {
  precioMensual = 3999;
  duracion = 6;
} else if (programa === "master") {
  precioMensual = 2999;
  duracion = 12;
} else {
  alert("Programa no válido");
  precioMensual = 0;
  duracion = 0;
}

let descuentoPorcentaje = 0;
if (beca === "facebook") {
  descuentoPorcentaje = 20; // 20%
} else if (beca === "google") {
  descuentoPorcentaje = 15; // 15%
} else if (beca === "jesua") {
  descuentoPorcentaje = 50; // 50%
}

const precioConDescuento = precioMensual * (1 - descuentoPorcentaje / 100);
const costoTotal = precioConDescuento * duracion;

alert(
  "El precio mensual con descuento es " +
    precioConDescuento +
    " MXN. El costo total del programa es " +
    costoTotal +
    " MXN."
);
