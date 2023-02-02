const app = require("./app");
const { db } = require("./db");


const PORT = process.env.PGPORT || 3000; //
const HOST = process.env.PGHOST || "0.0.0.0"; // 

db.sync({ force: false }).then(() => {
  console.log("Base de datos conectada!");
  app.listen(PORT, HOST, () => {
    console.log(`Listening in ${PORT}`); // eslint-disable-line no-console
  });
});
