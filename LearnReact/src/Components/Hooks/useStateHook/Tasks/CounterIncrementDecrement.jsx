import { useState } from "react";

let CounterIncrementDecrement = ()=>
{

    let [count, setCount] = useState(0);
    return(
        <>
            <div>
                <h1> {count} </h1>

                <button onClick={()=>{
                   setCount(count+1)
                }}> Add Item</button>


                <button onClick={()=>{
                    setCount(count-1)
                }}> Remove Button</button>


                <button onClick={()=>{
                    setCount(0)
                }}> Reset</button>
            </div>
        </>
    )
}

export default CounterIncrementDecrement ;