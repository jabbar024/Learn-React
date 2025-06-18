import { Component } from "react" ;

class UseOfState extends Component
{
    constructor()
    {
        super() ;

        this.state = {
            cardItem : 0
        }
    }


    render()
    {
        return(
            <div>
                <h1>Ketan Chutiya = {this.state.cardItem}</h1>
                <button onClick={()=>{
                    this.setState({ cardItem : this.state.cardItem += 1})
                }}>👍</button>
            </div>
        )
    }
}

export default UseOfState