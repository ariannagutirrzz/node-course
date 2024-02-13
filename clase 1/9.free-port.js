const net = require("node:net");

function getPort(port) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(port, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    }); // Promise

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        getPort(0).then((port) => resolve(port));
      } else {
        reject(error);
      }
    }); // server.on
  });
}
module.exports = getPort;
