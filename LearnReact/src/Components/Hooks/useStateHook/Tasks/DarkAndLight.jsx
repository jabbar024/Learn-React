import { useState } from "react"
import "./DarkAndLight.css"
let DarkAndLight = ()  =>
{
    let [state, setState] = useState(true)
    return(
        <>
            <div id="mainDiv" className={state?"dark" : "light"} onClick={()=>{setState(!state)}}>
                <section>

                    <button>{state ? "Change To Light" : "Chnage To Dark" }</button>

                </section>
            </div>
        </>
    )
}

export default DarkAndLight