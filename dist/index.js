import express from "express";
const app = express();
// app variable holds the functionality of the express variable
// GET - want to get data from database
// PUT - modify or update data
// POST - send data
// DELETE - send some data to delete something
app.use(express.json());
app.get("/user/:id", (req, res, next) => {
    console.log(req.params.id);
    return res.send("Hello");
});
app.listen(5000, () => console.log("Server Open"));
//5000 is a port number
//# sourceMappingURL=index.js.map