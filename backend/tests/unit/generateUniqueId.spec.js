const randomId = require('../../src/utils/generateUniqueId'); 

describe('Generate Unique ID', () => {
    it('Deveria gerar um ID único', ()=>{
        const id = randomId();

        expect(id).toHaveLength(8);
    });
})