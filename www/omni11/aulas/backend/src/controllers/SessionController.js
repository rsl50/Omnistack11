const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.body;

        //verifica se a ong existe e retorna nome para o front-end
        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            if (!ong) {
                return response.status(400).json({ error: 'No ONG found with this ID' });
            }

            return response.json(ong);
    }
}