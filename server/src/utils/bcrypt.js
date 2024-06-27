import { hash, compare } from "bcrypt";
export const encrypt = async (password)=>{
    const passwordHash= await hash(password, 8)
    return passwordHash
}
export const verified = async (contraseña, passwordHash)=>{
    const isCorrect= await compare(contraseña, passwordHash)
    return isCorrect
}