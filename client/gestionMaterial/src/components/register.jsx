import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Register() {
const [Nombre, setNombre]=useState('')
const [DocumentoIdentidad, setDocumentoIdentidad]=useState('')
const [Institucion, setInstitucion]=useState('')
const [Correo, setCorreo]=useState('')
const [Telefono, setTelefono]=useState('')
const [Contraseña, setContraseña]=useState('')
const [NumeroDocumento, setNumeroDocumento]=useState('')
const[datosActualizados, setDatosActualizados]=useState(false)
const handleRegister=async(event)=>{
  event.preventDefault();
  try{
  const data = await axios.post('http://localhost:4000/estudiante/',{Nombre, DocumentoIdentidad,NumeroDocumento,Institucion, Correo,Telefono, Contraseña})
  console.log(data.data)
setDatosActualizados(true) }
  catch (error) {
      console.error('Error al registrar estudiante:', error);
  }
}
  return (
    <div className='grid justify-items-center p-2.5'>

<div className='grid grid-cols-1 justify-items-center bg-orange-200 w-1/4  '>
<h1 className=' my-14 font-black rounded items-center text-center'>Registro de estudiante </h1>
<div className='h-96 '> 
<form action="" onSubmit={handleRegister} className='grid grid-cols-1  '>
    <label htmlFor="" className=' my-9 text-center'>Nombre</label>
    <input type="text" value={Nombre} onChange={(event)=>setNombre(event.target.value)} className='mb-9'/>
    <label htmlFor="" className='text-center mb-9'>Documento Identidad</label>
    <input type="text"className='mb-9' value={DocumentoIdentidad} onChange={(event)=>setDocumentoIdentidad(event.target.value)}/>
    <label htmlFor="" className='text-center mb-9'>Número documento </label>
    <input type="text"className='mb-9'value={NumeroDocumento} onChange={(event)=>setNumeroDocumento(event.target.value)}/>
    <label htmlFor="" className='text-center mb-9'>Institución</label>
    <input type="text"className='mb-9' value={Institucion} onChange={(event)=>setInstitucion(event.target.value)}/>
    <label htmlFor="" className='text-center mb-9'>Correo</label>
    <input type="text"className='mb-9' value={Correo} onChange={(event)=>setCorreo(event.target.value)}/>
    <label htmlFor="" className='text-center mb-9'>Teléfono</label>
    <input type="text"className='mb-9' value={Telefono} onChange={(event)=> setTelefono(event.target.value)}/>
    <label htmlFor="" className='text-center mb-9'>Contraseña</label>
    <input type="password"className='mb-9'value={Contraseña} onChange={(event)=>setContraseña(event.target.value)} />
    <button type='submit' className=' rounded bg-green-300 '  >Registrase </button>
</form>

{datosActualizados && (
        <div>
          <p>Estudiante Registrado</p>
          <Link to='/'>Volver al inicio</Link>
        </div>
      )}
</div>
</div>
</div>
  )
}
