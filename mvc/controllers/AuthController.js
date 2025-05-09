const AuthModel = require("../models/AuthModel")


class Authcontroller
{

    constructor(app)
    {
        app.get("/auth", (req, res) =>{
            res.render("Auth/Login", {erro:""})
        })
        app.post("/auth", (req, res) =>{
            const usuario = req.body.usuario
            const senha = req.body.senha

            const auth = new AuthModel(usuario, senha)

            if(auth.login() === true){
                res.render("Home/index")
            }
            else{
                res.render("Auth/Login", {erro:"Senha ou Usuario errado Tente novamente"})
            }
        })
    }

}

module.exports = Authcontroller