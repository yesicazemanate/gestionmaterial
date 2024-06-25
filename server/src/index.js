import express from 'express'
import db from './config/database.js'
import router from './routes/index.js'
import cors from 'cors'
//inicialización
const app =express()
app.use(cors())
app.use(express.json());
//configuracion
app.set('port',process.env.PORT || 4000)

   

app.use(router)


//run server
app.listen(app.get('port'), ()=>{
    console.log('Server listening on port', app.get('port'))
})
try {
    await db.getConnection();
    console.log('Conectado a la base de datos');
} catch (err) {
    console.error('Error de conexión a la base de datos:', err);
}
