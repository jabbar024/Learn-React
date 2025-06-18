import { useState } from "react"

let ShowAndHideParagraph = ()=>
{
    let [state, setState] = useState(true)
    
    return(
        <div>
            <button onClick={()=>{
                setState(!state)
            }}>
                {state ? "Hide" : "Show"}
            </button>

             {state ?  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati suscipit accusantium et fugit architecto? Enim, asperiores accusantium amet doloribus iusto quae, qui repellendus laudantium facere animi rerum quisquam nemo.
            </p> : ""}
        </div>
    )
}

export default ShowAndHideParagraph