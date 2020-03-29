const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async ()=>{
        await connection.destroy();
    });

    it('Criar um nova ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD 3",
            email: "contato@apad.com.br",
            whatsapp: "470000000",
            city: "São Paulo",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})