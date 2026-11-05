import { Link } from "react-router-dom"

const Navbar=()=>{
    return(<>
    <div  className="bg-blue-800 flex  ">
        <div>
      logo
    </div>
    <div>
        <Link to={"/login"}>login</Link>
        <Link to={"/register"}>register</Link>
        <Link to={"/"}>dashbord</Link>


    </div>
    </div>
    </>)
}
export default Navbar