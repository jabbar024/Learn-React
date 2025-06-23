import React from 'react'

const PropsTask2Child = (props) => 
{
  let {props : {state, setState}} = props ;

  return (
    <div>
        <button className='h-auto w-auto font-bold text-6xl border border-black bg-black text-white' onClick={()=>{ setState(state+1) } } >Add</button><br />
        <h1 className='text-3xl '>{state}</h1>
    </div>
  )
}

export default PropsTask2Child
