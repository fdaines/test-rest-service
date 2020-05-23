const supertest = require("supertest");
const app = require("../src/server")

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200, JSON.stringify({ name: "Guest" }))
    .end(done)
})
