class AuthModel
{
    usuario
    senha

    constructor(usuario, senha)
    {
        this.usuario = usuario
        this.senha = senha
    }

    login()
    {
        let existe = false

        if(this.usuario === "admin" && this.senha === "123"){
            existe = true
        }

        return existe
    }
}

module.exports = AuthModel