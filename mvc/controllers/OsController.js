const OsModel = require("../models/OsModel");

class OsController {
    constructor(app, pool) {
        this.osModel = new OsModel(pool);

        app.get("/", async (req, res) => {
            if (!req.session.isAuthenticated) return res.redirect("/login");
          
            const userId = req.session.user.id;
            const texto = await this.osModel.obterTexto(userId);
            const { x, y } = await this.osModel.obterPosicaoIcone(userId);
            
            res.render("os/OS", {
              texto,
              iconeX: x,
              iconeY: y,
              bgIndex: 0, // você pode adicionar isso ao banco depois
              user: req.session.user
            });
          });

        app.post("/salvar-texto", async (req, res) => {
            const userId = req.session.user.id;
            const { texto } = req.body;
            await this.osModel.salvarTexto(userId, texto);
            res.sendStatus(200);
        });

        app.post("/salvar-posicao", async (req, res) => {
            const userId = req.session.user.id;
            const { x, y } = req.body;
            await this.osModel.salvarPosicaoIcone(userId, x, y);
            res.sendStatus(200);
        });
    }
}

module.exports = OsController;
