function imprimirTItulo() {
  console.log("********************************************************");
  console.log("       Sistema de ordenacion de archivos!");
  console.log("********************************************************\n");
}

imprimirTItulo();

const archivoGest = require("./organizacion-archivos/ordenacion.js");
archivoGest("C:\\Users\\Noemi\\Downloads");
