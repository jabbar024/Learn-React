import { Component } from "react";
import UserLogin from "./UserLogin";
import UserName from "./UserName";
import PassWord from "./Password";
import CheckAndForgetContainer from "./CheckAndForgetContainer";
import LoginButton from "./LoginButton";

class FormContainer extends Component
{
    render()
    {
        return(
            <div className="formContainer">
                <UserLogin />
                <UserName />
                <PassWord />
                <CheckAndForgetContainer />
                <LoginButton />

            </div>
        )
    }
}

export default FormContainer