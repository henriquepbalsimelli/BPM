const bcrypt = require('bcrypt') 
    
export async function generateHash(password){
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export async function compareHash(password, hash) {
    const result = await bcrypt.compareSync(password, hash);
    return result;
}
