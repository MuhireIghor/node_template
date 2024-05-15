const bcrypt = require('bcryptjs');
export const hashPassword = async (plainPassword: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(plainPassword, salt);
    return hashPassword;
}