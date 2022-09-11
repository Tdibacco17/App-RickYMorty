const session = require('supertest-session');
const app = require("../../app")
const agent = session(app);

describe("Test de rutas", () => {
  describe("GET /Characters", () => {
    it("responder con status 200", () => agent.get("/Characters").expect(200));

  });
})

/*
/Characters
/Details/:id"
/Status/:status/:species/:gender"
/relacionesEpisodios/:id"
/relacionesEpisodiosCharacterCap/:id"
/relacionesOrigin/:id"
/relacionesOriginResidents/:id"
/relacionesLocation/:id",
/relacionesLocationResidents/:id"
*/