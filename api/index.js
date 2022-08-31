const app = require("./app");
const { db } = require("./db");
// const { PORT, PGPORT } = process.env;
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

// app.listen(PORT, () => {
//     console.log(`Listening in http://localhost:${PORT}/`);
//     db.sync({ force: true });
// });

db.sync({ force: false }).then(() => {
  console.log("Base de datos conectada!");
  app.listen(PORT, HOST, () => {
    console.log(`Listening in http://localhost:${PORT}/`); // eslint-disable-line no-console
  });
});

