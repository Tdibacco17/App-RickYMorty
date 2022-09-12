const request = require('supertest');
const app = require("../../app")

const agent = request(app);

describe("GET /Characters", ()=>{
  
  test("deberia retornar un formato json", async () => {
    await agent.get("/Characters")
    .expect(200)
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