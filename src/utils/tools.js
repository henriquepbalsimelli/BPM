const bcrypt = require('bcrypt') 


const hashService = {
    
    async generateHash(password){
        const salt = await bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    },
    
    async compareHash(password, hash) {
        const result = await bcrypt.compareSync(password, hash);
        return result;
    }
}


export default hashService;