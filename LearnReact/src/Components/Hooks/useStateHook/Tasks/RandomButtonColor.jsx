import { useState } from "react"
import "./RandomVuttonColor.css"
let RandomButtonColor = ()=>
{
    let [state, setState] = useState("#000000");
    let colorChange = ()=>
    {
        return "#"+Math.floor(Math.random()*1000000)
    }

   
    return(
        
        <>
           <div id="mainDiv" style={{backgroundColor : state}}>
                <button onClick={()=>{setState(colorChange())}}>Click To Change</button>
           </div>
        </>
    )
}

export default RandomButtonColor