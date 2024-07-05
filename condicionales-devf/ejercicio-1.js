// 1.	Solicitar al usuario que responda a la pregunta
// (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”,
// en caso de contestar no, responder: “No te creo”.

const respuesta = prompt("¿Eres bellisimo/a? (sí/no):");
if (respuesta.toLowerCase() == "sí") {
  alert("Ciertamente");
} else {
  alert("No te creo");
}
