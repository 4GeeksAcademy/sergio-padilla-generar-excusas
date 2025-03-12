window.onload = function() {

  let primero = "Un ";
  let adj = ["con dos cabezas ", "nuclear ", "enojado ", "solitario ", "loco ", "brillante ", "maloliente ", "lento ", "viejo "]; 
  let sustantivo = ["corredor ", "mapache ", "perro ", "comerciante ", "conductor ", "comediante ", "piña "]; 
  let accion = ["tomó mi ", "tiró mi ", "le grité a mi ", "pateé mi ", "robé mi ", "quemé mi ", "mordí mi ", "golpeé mi "]; 
  let posesion = ["dedo del pie ", "coche ", "reloj ", "zapato ", "cartera ", "camisa ", "llaves ", "ordenador ", "teléfono ", "sándwich "]; 
  let donde = ["en la calle", "en mi casa", "en la entrada de mi casa", "frente a la oficina", "cerca del centro comercial", "cerca del baño", "en la estación de autobuses"];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * sustantivo.length);
  let rdm3 = Math.floor(Math.random() * accion.length);
  let rdm4 = Math.floor(Math.random() * posesion.length);
  let rdm5 = Math.floor(Math.random() * donde.length);

  document.querySelector("#excuse").innerHTML = primero + adj[rdm1] + sustantivo[rdm2] + accion[rdm3] + posesion[rdm4] + donde[rdm5];
  
}