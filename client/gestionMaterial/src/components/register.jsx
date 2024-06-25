import React from 'react'

export default function register() {
  return (
    <div className='grid justify-items-center p-2.5'>

<div className='grid grid-cols-1 justify-items-center bg-orange-200 w-1/4  '>
<h1 className=' my-14 font-black rounded items-center text-center'>Inicio de seción </h1>
<div className='h-96 '> 
<form action="" className='grid grid-cols-1  '>
    <label htmlFor="" className=' my-9 text-center'>Usuario</label>
    <input type="text"  className='mb-9'/>
    <label htmlFor="" className='text-center mb-9'>Contarseña</label>
    <input type="text"className='mb-9' />
    <button type='submit' className=' rounded bg-green-300' >Ingresar </button>
</form>


</div>
</div>
</div>
  )
}
