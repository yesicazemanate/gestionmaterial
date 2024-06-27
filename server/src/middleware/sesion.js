import { verifyToken } from "../utils/jwt.js";

export const checkjwt = (req, res, next) => {
  try {
    const jwtUser = req.headers.authorization || null;
    if (!jwtUser) {
      return res.status(401).send('No tienes una sesión válida');
    }

    const jwt = jwtUser.split(' ')[1];
    const verify = verifyToken(jwt);
    
    if (!verify) {
      return res.status(401).send('No tienes una sesión válida');
    }

    console.log({ jwtUser });
    next();
  } catch (error) {
    console.error(error);
    res.status(400).send('Sesión inválida');
  }
};