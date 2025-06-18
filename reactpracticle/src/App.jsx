import { Component } from "react";
import Navbar from "./Navbar" ;
import AsideBar from "./AsideBar";
import MainContent from "./assets/MainContent";
import Footer from "./Footer";
import UseOfState from "./UseOfState";

class App extends Component
{
  constructor()
  {
    super() ;
    this.a = 10 // This is automatically Declare in Global Space
  }

  render()
  {
    return(
      <div>
        {/* <Navbar/>
        <div className="container">
             <AsideBar/>
             <MainContent/>
        </div>
        <Footer/> */}
       
       <UseOfState />

      </div>
    )
  }
}
export default App ;