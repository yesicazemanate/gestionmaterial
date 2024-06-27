import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;
const firmaSecreta= 'bts12345'

export const generateToken= async(Correo)=>{
const jwt =  sign({Correo}, firmaSecreta ,{expiresIn:'2h'} )
return jwt
}
export const verifyToken = async()=>{
const isOk=verify(jwt, firmaSecreta)
return isOk
}