const connection = require('../database/connection');

module.exports = {
    async index(request, response) {        
        //paginação para leitura dos resultados
        const {page = 1} = request.query;

        //quantidade total de casos, 
        //como a resposta é um valor só pode ser const [count],
        //caso fosse um array maior poderia ler depois com count[0]
        const [count] = await connection('incidents').count();

        //loga a variável count
        //console.log(count);

        //limitação do select para paginação dos resultados de 5 em 5
        const incidents = await connection('incidents')
            .limit(5)    
            .offset((page - 1) * 5)
            .select('*');

        response.header('X-Total-Count', count['count(*)']);

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