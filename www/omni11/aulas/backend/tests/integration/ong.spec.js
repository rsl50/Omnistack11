const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        /* Antes de cada execução, gera o banco de testes novamente */
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Dinoland",
	            email: "contato@dinoland.com.br",               
                whatsapp: "11912345678",
	            city: "São José dos Campos",
	            uf: "SP"
            });

        //console.log(response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        ong_id = response.body.id;
        console.log(ong_id);
    });
});