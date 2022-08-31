const app = require("./app");
const { db } = require("./db");
// const { PORT, PGPORT } = process.env;

// app.listen(PORT, () => {
//     console.log(`Listening in http://localhost:${PORT}/`);
//     db.sync({ force: true });
// });

//FORCE FALSO QUEDA CARGADO
//FORCE TRUE REINICIA
const PORT = process.env. PORT || 3000;

db.sync({ force: false }).then(() => {
  console.log("Base de datos conectada!");
  app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/`); // eslint-disable-line no-console
  });
});

