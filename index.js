const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

// const PORT 5000

// dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())


mongoose
    .connect("mongodb+srv://kasthurisivabalan15:NfUx7GHas2a2pDMs@cluster0.gcjigyj.mongodb.net/studentproject?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(5000, () => {
    console.log(`Server started at port no 5000`)
})