const http = require("node:http"); // Protocolo http

const server = http.createServer((request, response) => {
  console.log("request received");
  response.end("hello world");
  response._destroy();
});

// Para produccion utilizar el puesto 0 no tendria sentido, ya que queremos estabilidad dentro del puerto, pero dentro de desarrollo no hay problema con utilizarlo

server.listen(0, () => {
  console.log(
    `server is listening on port http://localhost:${server.address().port}`
  ); // server.address().port nos da el puerto en el que se esta ejecutando el servidor
});
