
const express = require("express");
const app = express();
const { scraper } = require('../scraper');
require("./database/mongoose");
const userRouter = require("./routers/user");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRouter);








// // Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.post("/api", async (req, res) => {

//   await scraper(req.body.pin, req.body.dob, req.body.phone);
//   await res.send(console.log("Schedule Sent.")).status(200);

// })

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });





module.exports = app;