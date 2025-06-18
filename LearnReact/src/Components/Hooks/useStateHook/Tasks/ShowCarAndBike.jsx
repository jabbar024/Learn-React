import { useState } from "react"
import bike from "../../../../assets/bike.jpg"
import car from "../../../../assets/car.webp"

let ShowCarAndBike = ()=>
{
    let [state, setState] = useState(true) ;
    return(
        <>
            <button style={{backgroundColor : "black", color : 'white'}} onClick={()=>{setState(!state)}}>{state?"Show Bike" : "Show Car"}</button><br/><br /><br />
            <img src={state?car : bike} alt="" />
        </>
    )
}

export default ShowCarAndBike