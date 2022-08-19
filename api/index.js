const app = require("./app");
const { db } = require("./db");
const { PORT } = process.env;

// app.listen(PORT, () => {
//     console.log(`Listening in http://localhost:${PORT}/`);
//     db.sync({ force: true });
// });

//FORCE FALSO QUEDA CARGADO
//FORCE TRUE REINICIA

db.sync({ force: false }).then(() => {
  console.log("Base de datos conectada!");
  app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/`); // eslint-disable-line no-console
  });
});

