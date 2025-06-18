import { Component } from "react";

class ShowPassword extends Component
{
    render()
    {
        return(
           <label htmlFor="show" className="showPassword"> 
                 <input id="show" type="checkbox" className="checkBox"/> Show Password
           </label>
        )
    }
}

export default ShowPassword