import { useState } from "react";

let UseStateTask1 = ()=>
{

    let arr = useState(0);
    return(
        <>

            <div>
                <h1> {arr[0]} </h1>
                <button onClick={()=>{
                    arr[1](arr[0]+1)
                }}> Add Item</button>
            </div>
        </>
    )
}

export default UseStateTask1 ;