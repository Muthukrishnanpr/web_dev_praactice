if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}
const Port = process.env.PORT || 8080

require("./database")();

const express = require("express")
const app = express()

const expressLayouts = require("express-ejs-layouts")

const indexRouter = require("./routes/index")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout","layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))

app.use("/", indexRouter)

app.listen(Port , () => {
    console.log(`Server is listening on url http://localhost:${Port}`)
})
