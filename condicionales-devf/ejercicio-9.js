//9.	Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. crea el codigo completo

const topping = prompt(
  "¿Qué topping quieres? (oreo, kitkat, brownie)"
).toLowerCase();

// Precio base del helado
let precioHelado = 50;

// helado con topping
if (topping == "oreo") {
  precioHelado += 10;
  alert("El precio del helado con topping de oreo es " + precioHelado + " MXN");
} else if (topping == "kitkat") {
  precioHelado += 15;
  alert(
    "El precio del helado con topping de KitKat es " + precioHelado + " MXN"
  );
} else if (topping == "brownie") {
  precioHelado += 20;
  alert(
    "El precio del helado con topping de brownie es " + precioHelado + " MXN"
  );
} else {
  alert(
    "No tenemos este topping, lo sentimos. El precio del helado sin topping es 50 MXN"
  );
}
