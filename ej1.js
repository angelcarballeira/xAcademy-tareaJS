alert(
  "Este ejercicio tiene una función que dibuja una pirámide desde el 1 hasta el nro ingresado "
);

let nroUsuario = parseInt(prompt("Ingresa un número base para la pirámide"));

function piramide(numero) {
  let i = 1;
  while (i <= numero) {
    let fila = "";
    let j = 1;
    while (j <= i) {
      fila += j;
      j++;
    }
    console.log(fila);
    i++;
  }
}

piramide(nroUsuario);
