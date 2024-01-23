import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";



/*app.get("/user/:id", (req, res, next) => {
  console.log(req.params.id)
  return res.send("Hello");
})*/


//connections and listeners

const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {

  app.listen(5000,() => console.log("Server Open & connected to database"));
//5000 is a port number

}).catch((err) => console.log(err));


 