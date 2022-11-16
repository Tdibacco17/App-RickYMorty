const app = require("./app");
const { db } = require("./db");

// const PORT = process.env.PGPORT || 6031;
// const HOST = process.env.HOST || "0.0.0.0";

const PORT = process.env.PORT || 6032;
// const HOST = process.env.HOST || "0.0.0.0";

db.sync({ force: false }).then(() => {
  console.log("Base de datos conectada!");
  app.listen(PORT, () => {
    console.log(`Listening in ${PORT}`); // eslint-disable-line no-console
  });
});
