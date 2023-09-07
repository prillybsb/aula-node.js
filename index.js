const fs = require("fs");

fs.writeFile(
  "./files/arquivo.txt",
  "Esse é meu primeiro arquivo",
  function (err) {
    if (err) {
      return console.log(`algo deu errado: ${err} `);
    }
  }
);
