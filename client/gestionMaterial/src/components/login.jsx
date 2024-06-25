import { useState } from "react"

  
  function Login(){
    const [password, setPassword]=useState('')
    const [user, setuser]=useState('')
    const handleLogin=(event)=>{
        event.preventDefault();
        console.log({password:password,
            usename:user
        })
    }
    return(
 <>
<div className='grid grid-cols-1 justify-items-center bg-orange-200 w-1/4  '>
<h1 className=' my-14 font-black rounded items-center text-center'>Inicio de seción </h1>
<div className='h-96 '> 
<form action="" className='grid grid-cols-1  '>
    <label htmlFor=""  className=' my-9 text-center'>Usuario</label>
    <input type="text" value={user} onChange={(event)=>setuser(event.target.value)} className='mb-9'/>
    <label htmlFor="" className='text-center mb-9'>Contarseña</label>
    <input type="text" value={password} onChange={(event)=>setPassword(event.target.value)} className='mb-9' />
    <button type='submit' className=' rounded bg-green-300' onClick={handleLogin}>Ingresar </button>
</form>


</div>
</div>

 </>
    )
}
export default Login