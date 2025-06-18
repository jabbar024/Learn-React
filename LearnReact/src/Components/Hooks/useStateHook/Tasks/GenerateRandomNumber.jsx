import { useState } from "react"

let RandomNumberGenerate = ()=>
{
    let [state, setState] = useState(0) ;
    
    let generateNumber = ()=>{ return Math.floor(Math.random()*100)}
    return(
        <>
        <h1>{state}</h1>
        <br />
        <button onClick={()=>{setState(generateNumber())}}>Generate Randome Number</button>
        </>
    )
}
export default RandomNumberGenerate 