import { Component } from "react";
import UseOfState from "./Components/ClassBased Component/UseOfState";
import { createElement } from "react";
import JSXInro from "./Components/JSXIntro/JsxInro";
import HooksIntro from "./Components/Hooks/HooksIntro";
import UseOfTailwindCss from "./Components/Tailwind Css/useOfTailwindCss";

// Class Based Component
// class App extends Component
// {
//   render()
//   {
//       return(
//           <div>
//               {/* <UseOfState/> */}
//           </div>
//       )
//   }
// }

// export default App

//Function Based Component
let App = ()=>
{
   
    return(
        <div>
            
           <div>
            {/*__________JSX Introduction__________ */}
               {/* <div>
                    <JSXInro />
               </div> */}

            {/*__________All about Hooks__________ */}
               <div>
                     <HooksIntro />
               </div>

               {/* __________Tailwind Css__________ */}
               <div>
                <UseOfTailwindCss />
               </div>

                
           </div>
        </div>
    )
}
export default App