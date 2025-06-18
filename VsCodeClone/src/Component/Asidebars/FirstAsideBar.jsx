import React from 'react'

const FirstAsideBar = () => {
  return (
    <>
      <div className='h-[90vh] w-[5vh] bg-[#2C2C2C] flex align-middle flex-col justify-between items-center text-2xl '>
        <div className='text-gray-300 flex align-middle flex-col h-[40%] justify-between items-center text-2xl'>  
            <i className="fa-solid fa-file mt-2"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-code-branch"></i>
            <i className="fa-solid fa-table-cells-large"></i>
            <i className="fa-brands fa-python"></i>
        </div>
        <div className='text-gray-300 flex align-middle flex-col h-[13%] justify-between items-center text-2xl'>
             <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-gear mb-3"></i>
        </div>
           

      </div>
    </>
  )
}

export default FirstAsideBar
