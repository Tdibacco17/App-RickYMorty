const request = require('supertest');
const app = require("../../app")

const agent = request(app);

describe("GET /Characters", () => {

  test("deberia retornar un formato json", async () => {
    await agent.get("/Characters")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia retornar todos los personajes", async () => {
    const response = await agent.get("/Characters")
    expect(response.body).toHaveLength(826) //response.body.length
  })

  test("deberia retornar el/los personajes si se pasa nombre por Query", async () => {
    const response = await agent.get("/Characters?nameCharacter=Rick")
    const contents = response.body.map(e => e.name.toLowerCase())
    contents.map(e => expect(e).toContain("rick"))
  })

  test("deberia retornar un array vacio si se le pasa nombre por Query y no lo encuentra", async () => {
    const response = await agent.get("/Characters?nameCharacter=ArrayVacio")
    expect(response.body).toStrictEqual([])
  })

})

describe("GET /Details", () => {

  test("deberia retornar un formato json", async () => {
    await agent.get("/Details/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/Details/1")
    expect(response.statusCode).toBe(200);
    expect(response.body.characterId).toBe(1);
  })

  test("deberia contestar con un status 200 si no se envia un id y un msg: Error 400", async () => {
    const response = await agent.get("/Details/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])

  })
  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un msg: Error 404", async () => {
    const response = await agent.get("/Details/2222222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])

  })
})

describe("GET /relacionesEpisodios", () => {

  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodios/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesEpisodios/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0][0].episodeId).toBe(1);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesEpisodios/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])

  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesEpisodios/2222222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })
})

describe("GET /relacionesEpisodiosCharacterCap", () => {
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodiosCharacterCap/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesEpisodiosCharacterCap/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0][0].characterId).toBe(1);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesEpisodiosCharacterCap/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesEpisodiosCharacterCap/22222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })
})

describe("GET /relacionesOrigin", () => {
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodiosCharacterCap/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesOrigin/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0].locationId).toBe(1);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesOrigin/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesOrigin/22222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })
})

describe("GET /relacionesOriginResidents", () => {
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodiosCharacterCap/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesOriginResidents/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0][0].characterId).toBe(38);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesOriginResidents/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesOriginResidents/22222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })
})

describe("GET /relacionesLocation", () => {
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodiosCharacterCap/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesLocation/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0].locationId).toBe(3);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesLocation/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesLocation/22222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

})

describe("GET /relacionesLocationResidents", () => {
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodiosCharacterCap/:id")
      .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () => {
    const response = await agent.get("/relacionesLocationResidents/1")
    expect(response.statusCode).toBe(200);
    expect(response.body[0][0].characterId).toBe(38);
  })

  test("deberia contestar con un status 200 si no se envia un id y un json = []", async () => {
    const response = await agent.get("/relacionesLocationResidents/:id")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

  test("deberia contestar con un status 200 si se envia un id y no encuentra nada con un json = []", async () => {
    const response = await agent.get("/relacionesLocationResidents/22222")
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual([])
  })

})
/*
agent.get("/test").then((res) => {
      expect(res.body.message).toEqual("test")

/Status/:status/:species/:gender"

*/