import React, { useState } from "react"

let RemoveItem = ()=>
{
    let items = ["Item1","Item2","Item3","Item4","Item5","Item6"]
    let [state, setState] = useState(items)
    return(
        <>
            <div>
                {state.map((val, i)=>{
                    return(
                        <React.Fragment key={i}>
                            <h1>{val}</h1>
                            <button onClick={()=>{
                               let temp = [...state] ;
                               temp.splice(i,1);
                               setState(temp)
                            }}>Remove</button>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )   
}

export default RemoveItem 