import { Component } from "react";
import WelcomeHeading from "./WelcomeHeading";
import WelcomeDetails from "./WelcomeDetails";

class ContentContainer extends Component
{

    render()
    {
        return(
            <div className="contentContainer">
                <WelcomeHeading />
                <WelcomeDetails />
            </div>
        )
    }
}

export default ContentContainer