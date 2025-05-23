const bcrypt = require('bcrypt');

class AuthModel {
    constructor(pool) {
        this.pool = pool;
    }

    async login(usuario, senha) {
        try {

            // 1. Busca apenas pelo usuário
            const [rows] = await this.pool.execute(
                'SELECT id, usuario, senha_hash FROM usuarios WHERE usuario = ? LIMIT 1',
                [usuario]
            );

            if (rows.length === 0) {
                return { success: false, message: 'Usuário não encontrado' };
            }

            const user = rows[0];

            // 2. Compara a senha fornecida com o hash armazenado
            const senhaValida = await bcrypt.compare(senha, user.senha_hash);

            if (!senhaValida) {
                return { success: false, message: 'Senha incorreta' };
            }

            // 3. Retorna o usuário autenticado
            return {
                success: true,
                user: {
                    id: user.id,
                    usuario: user.usuario
                }
            };
        } catch (error) {
            console.error('Erro no login:', error);
            return { success: false, message: 'Erro durante o login' };
        }
    }
}

module.exports = AuthModel;
