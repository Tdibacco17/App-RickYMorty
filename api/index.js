const app = require("./app");
const { db } = require("./db");
const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/`);
    db.sync({ force: false });
});