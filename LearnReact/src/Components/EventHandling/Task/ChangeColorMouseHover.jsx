import React from 'react'

const ChangeColorMouseHover = () => {

    let handleMouseEnter = (e, c) =>{
        e.target.style.backgroundColor = c;
        
    }

    let colorChange = ()=>
    {
        return "#"+Math.floor(Math.random()*1000000)
    }
  return (
    <>   
      <div className='h-96 w-96 border border-red-500' onMouseEnter={(e)=>{handleMouseEnter(e, colorChange())}} onMouseLeave={(e)=>{e.target.style.backgroundColor = ""}}>

      </div>
    </>
  )
}

export default ChangeColorMouseHover
