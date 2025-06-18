import { useState } from "react";

let WhitoutUseStateIncrementCounterProblem = ()=>
{

    let count = 0 ;
    return(
        <>

            <div>
                <h1> {count} </h1>
                <button onClick={()=>{
                    count += 1 ;
                }}> Add Item</button>
            </div>
        </>
    )
}

export default WhitoutUseStateIncrementCounterProblem ;