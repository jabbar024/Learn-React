import React from 'react'

const DefaultArgumentWithFunction = () => {

    //Default Argument With Functions
    let demo = (message = "This is Default") =>
    {
        console.log(message);
        
    }
    demo("This is Not Default")


  return (
    <div>
      
    </div>
  )
}

export default DefaultArgumentWithFunction
