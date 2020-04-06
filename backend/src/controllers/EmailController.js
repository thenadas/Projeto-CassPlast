const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async listar(request, response) {
        const email = await connection('email').select('*');
    
        return response.json(email)
    },
    

    async create(request, response) {
        const { nome, empresa, cidade, email, mensagem } = request.body;

        const id = crypto.randomBytes(4).toString("HEX");
    
       await connection('email').insert({
           id,
           nome,
           empresa,
           cidade,
           email,
           mensagem, 
        })
    
        return response.json({ id });
    }
}