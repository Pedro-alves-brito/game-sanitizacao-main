const express = require("express")
const path = require("path")
const HomeController = require("./mvc/controllers/HomeController")
const AuthController = require("./mvc/controllers/AuthController")

class Server
{

    app
    porta 

    constructor()
    {
        this.app = express()
        this.porta = 3000
        
        this.on()
        this.configMiddleware()
        this.start()
    }

    start()
    {
        new HomeController(this.app)
        new AuthController(this.app)
    }

    configMiddleware()
    {
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.static(path.join(__dirname, "mvc/views/public")))
        this.app.use(express.json())
        this.app.set("view engine", "ejs")
        this.app.set("views","mvc/views")
       
    }

    on()
    {
        this.app.listen(this.porta)
    }
}

new Server()