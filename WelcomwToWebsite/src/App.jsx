import { Component } from "react";
import ContentContainer from "./ContentContainer";
import FormContainer from "./FormContainer";
import CopyWrite from "./CopyRight";


class App extends Component
{
  constructor()
  {
    super();
  }

  render()
  {
      return (
        <>
          <div className="containerDiv" >
            <ContentContainer />
            <FormContainer/>
          </div>
          <CopyWrite />
        </>
  )

  }

}

export default App
