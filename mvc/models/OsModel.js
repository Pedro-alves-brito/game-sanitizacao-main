class OsModel {
    constructor(pool) {
        this.pool = pool;
    }

    async salvarTexto(userId, texto) {
        await this.pool.execute('UPDATE usuarios SET texto_editor = ? WHERE id = ?', [texto, userId]);
    }

    async obterTexto(userId) {
        const [rows] = await this.pool.execute('SELECT texto_editor FROM usuarios WHERE id = ?', [userId]);
        return rows[0]?.texto_editor || '';
    }

    async salvarPosicaoIcone(userId, x, y) {
        await this.pool.execute('UPDATE usuarios SET icone_x = ?, icone_y = ? WHERE id = ?', [x, y, userId]);
    }

    async obterPosicaoIcone(userId) {
        const [rows] = await this.pool.execute('SELECT icone_x, icone_y FROM usuarios WHERE id = ?', [userId]);
        return {
            x: rows[0]?.icone_x || '20px',
            y: rows[0]?.icone_y || '20px'
        };
    }
}

module.exports = OsModel;
