import React from 'react'
import PropsTask1Child from './PropsTask1Child'

let PropsTask1 = () => {
  return (
    <>
      <PropsTask1Child name = "Jabbar" props = {{name : "Jabbar", age : 23, salary : 23000}} obj={()=>{console.log("Hello")}} arr = {[10,20,30,40]}/>
    </>
  )
}

export default PropsTask1
