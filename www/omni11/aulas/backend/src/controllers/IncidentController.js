const connection = require('../database/connection');

module.exports = {
    async index(request, response) {        
        const incidents = await connection('incidents').select('*');            
        return response.json(incidents);
    },

    async create(request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        
        //grava incidente no banco e retorna o id para variável
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        
        return response.json({id});
    }, 

    async delete(request, response) {        
        //recebe o id enviado na barra de endereço
        const { id } = request.params;
        //pega id da ong logada
        const ong_id = request.headers.authorization;

        //busca id para confirmar que ong que criou aquele caso
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id){
            //retorna erro
            return response.status(401).json({ error: 'Operation not permitted.' });
        }
        
        //caso contrário, deleta o caso do banco
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }

};