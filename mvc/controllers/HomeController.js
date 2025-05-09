
class HomeController
{
    constructor(app)
    {

        app.get("/", (req, res) => {

            res.render("Home/index", {
                nome_jogador: ""
            })
        })

    }
}

module.exports = HomeController