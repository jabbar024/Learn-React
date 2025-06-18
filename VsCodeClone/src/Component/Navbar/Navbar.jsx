import logo from "../../assets/vs-logo.png"
import operation from "../../assets/operation.png"
const Navbar = () => {
  return (

    <div className="h-[5vh] bg-[#DDDDDD] flex align-middle justify-between items-center">

        <div className="h-[100%] w-[25%] flex align-middle justify-between items-center">
           <img className=" h-[100%]" src={logo} alt="" />
           <p>File</p>
           <p>Edit</p>
           <p>Selection</p>
           <p>View</p>
           <p>Go</p>
           <p>Run</p>
           <p>...</p>
        </div>
        <div className="h-[100%] w-[70%] flex align-middle justify-between items-center" >
           <input className="w-[60%]" type="text" placeholder="🔎 React" />
           <img className="h-[70%]" src={operation} alt="" />
        </div>
       
    </div>
  )
}

export default Navbar
