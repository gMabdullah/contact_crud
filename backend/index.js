/**Import our dependencies */
import express from"express";
import cors from "cors";
// const bodyParser = require("body-parser")
import dotenv from "dotenv";
// dotenv.config();
import 'dotenv/config'
import {db} from "./db/config.js";
import router from "./routes/index.js";

/**create an object from express */
const app = express();

/**tell what our app to use */;
app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:true}))
/**Lets run our api on port 7000 */
app.listen(process.env.PORT, ()=>{
    console.log(`Our API is running ${process.env.PORT}`)
})

app.use("/api", router)


