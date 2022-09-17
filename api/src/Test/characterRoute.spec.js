const request = require('supertest');
const app = require("../../app")

const agent = request(app);

xdescribe("GET /Characters", ()=>{
  
  test("deberia retornar un formato json", async () => {
    await agent.get("/Characters")
    .expect("Content-Type", /application\/json/)
  })

  test("deberia retornar todos los personajes", async () =>{
   const response = await agent.get("/Characters")
   expect(response.body).toHaveLength(826) //response.body.length
  })
  
   test("deberia retornar el/los personajes si se pasa nombre por Query", async () =>{
    const response = await agent.get("/Characters?nameCharacter=Rick")
    const contents = response.body.map(e => e.name.toLowerCase())
    contents.map(e => expect(e).toContain("rick"))
   })

   test("deberia retornar un array vacio si se le pasa nombre por Query y no lo encuentra", async () =>{
    const response = await agent.get("/Characters?nameCharacter=ArrayVacio")
     expect(response.body).toStrictEqual([])
   })
 
})

describe("GET /Details", ()=>{

  test("deberia retornar un formato json", async () => {
    await agent.get("/Details/:id")
    .expect("Content-Type", /application\/json/)
  })

  test("deberia contestar con un status 200 si se envia un id", async () =>{
    const response = await agent.get("/Details/1")
    expect(response.statusCode).toBe(200);
    expect(response.body.characterId).toBe(1);
  })
  test("deberia contestar con un status 400 si no se envia un id y un msg: Error 400", async () =>{
    const response = await agent.get("/Details/:id")
    expect(response.statusCode).toBe(400);
    expect(response.body.msg).toBe("Error 400")
    
  })
  test("deberia contestar con un status 404 si se envia un id y no encuentra nada con un msg: Error 404", async () =>{
    const response = await agent.get("/Details/2222222")
    expect(response.statusCode).toBe(404);
    expect(response.body.msg).toBe("Error 404")

  })
})

describe("GET /relacionesEpisodios/:id", ()=>{
  
  test("deberia retornar un formato json", async () => {
    await agent.get("/relacionesEpisodios/:id")
    .expect("Content-Type", /application\/json/)
  })
})


/*
agent.get("/test").then((res) => {
      expect(res.body.message).toEqual("test")
/Status/:status/:species/:gender"
/relacionesEpisodios/:id"
/relacionesEpisodiosCharacterCap/:id"
/relacionesOrigin/:id"
/relacionesOriginResidents/:id"
/relacionesLocation/:id",
/relacionesLocationResidents/:id"
*/