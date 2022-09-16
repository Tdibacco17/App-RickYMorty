const request = require('supertest');
const app = require("../../app")

const agent = request(app);

describe("GET /Characters", ()=>{
  
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
  })
  test("deberia contestar con un status 400 si no se envia un id", async () =>{
    const response = await agent.get("/Details/:id")
    expect(response.statusCode).toBe(400);
    expect(response.body).toStrictEqual([])
    
  })
  test("deberia contestar con un status 404 si se envia un id y no encuentra nada", async () =>{
    const response = await agent.get("/Details/2222222")
    expect(response.statusCode).toBe(404);
    expect(response.body).toStrictEqual([])

  })
})




// describe("TEST DE RUTEO", () => {

//   describe("GET /Characters", () => {
//     it("responder con status 200", () => agent.get("/Characters").expect(200));
//     it("responder con status 400 si nameCharacter no es un number",() => 
//     agent.get("/Characters?nameCharacter=123").then((res) => {expect(res.body.msg).toBe("Dato de busqueda invalido")}));
//       // expect(res.statusCode).toBe(400);
//   })
  
  
// })

/*
agent.get("/test").then((res) => {
      expect(res.body.message).toEqual("test")

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