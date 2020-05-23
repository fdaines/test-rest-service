const supertest = require("supertest");
const app = require("../src/server")

describe("Testing server.js operations ", () => {
  it("GET /", done => {
    supertest(app)
      .get("/")
      .expect(200, JSON.stringify({ name: "Guest" }))
      .end(done)
  })

  it("POST /", async done => {
    return supertest(app)
      .post("/")
      .send({
         'name': 'Mike Wazowski',
         'age': '98'
       })
      .expect(response => {
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ name: "Mike Wazowski", age: "98" })
        done()
      })
  })
});
