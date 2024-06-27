import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";
  
  function Login(){
    const [Contraseña, setPassword]=useState('')
    const [Correo, setuser]=useState('')
    const [usuario, setUsuario]=useState('')
    const [selectedOption, setSelectedOption] = useState(''); 
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value); 
      };
    console.log(selectedOption)
    const handleLogin=async(event)=>{
        event.preventDefault();
        if(!selectedOption){
            alert('seleccione usuario')
        }else if(selectedOption=='administrador'){
            const data = await axios.post('http://localhost:4000/administrador/login',{
                Correo: Correo,
                Contraseña: Contraseña
            })
            if(data.data.error){
                alert("Usuario o Contraseña incorrectos");
            }else{
                localStorage.setItem('token', data.data.token);
                setUsuario(data.data.typoUser)
                alert('inicio de sesión exitoso')
            }
        }else if(selectedOption=='estudiante'){

            const data2 = await axios.post('http://localhost:4000/estudiante/login',{
                Correo: Correo,
                Contraseña: Contraseña
            })
            if(data2.data.error){
                alert("Usuario o Contraseña incorrectos");
            }else{
                localStorage.setItem('token', data2.data.token);
                setUsuario(data2.data.typoUser)
                alert('inicio de sesión exitoso')
            }
        }else{
            const data3 = await axios.post('http://localhost:4000/gestionador/login',{
                Correo: Correo,
                Contraseña: Contraseña
            })
            if(data3.data.error){
                alert("Usuario o Contraseña incorrectos");
            }else{
                localStorage.setItem('token', data3.data.token);
                setUsuario(data3.data.typoUser)
                alert('inicio de sesión exitoso')
            }
        }
    
   
        
        console.log(usuario)
   
    }
    return(
 <>
<div className='grid grid-cols-1 justify-items-center bg-orange-200 w-1/4  '>
<h1 className=' my-14 font-black rounded items-center text-center'>Inicio de seción </h1>
<div className='h-96 '> 
<form action="" onSubmit={handleLogin} className='grid grid-cols-1  '>
<label htmlFor="tipoUsuario" className='my-9 text-center'>Tipo Usuario</label>
<select
        id="tipoUsuario"
        value={selectedOption}
        onChange={handleSelectChange}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Seleccionar tipo de usuario</option>
        <option value="estudiante">Estudiante</option>
        <option value="administrador">Administrador</option>
        <option value="gestionador">Gestionador</option>
      </select>
    <label htmlFor=""  className=' my-9 text-center'>Usuario</label>
    <input type="text" value={Correo} onChange={(event)=>setuser(event.target.value)} className='mb-9'/>
    <label htmlFor="" className='text-center mb-9'>Contarseña</label>
    <input type="password" value={Contraseña} onChange={(event)=>setPassword(event.target.value)} className='mb-9' />
    <button type='submit' className=' rounded bg-green-300' >Ingresar </button>


</form>

<Link to={'/register'}><p> No tienes cuenta registrate</p></Link>

</div>
</div>

 </>
    )
}
export default Login