import React from 'react'

const SecondAsideBar = () => {
  return (
    <>
        <div className='h-[90vh] w-[20vw] bg-[#F3F3F3] flex flex-col align-middle items-center'>
            <div className='flex flex-row justify-between w-[90%] mt-3 text-gray-500'>
                <p>EXPLORE</p>
                <p>...</p>
            </div>
            <div className='flex flex-col justify-between w-[90%] mt-4'>
                <p>&gt; REACT</p>
                <p>&gt; OUTLINE</p>
                <p>&gt; TIMELINE</p>
            </div>

        </div>
      
    </>
  )
}

export default SecondAsideBar
