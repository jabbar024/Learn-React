import { Component } from "react";
import ShowPassword from "./ShowPassword";
import ForgetPassword from "./ForgetPassword";

class CheckAndForgetContainer extends Component
{
    render()
    {
        return(
            <div className="checkAndForgetContainer">
                <ShowPassword />
                <ForgetPassword />
            </div>
        )
    }
}

export default CheckAndForgetContainer