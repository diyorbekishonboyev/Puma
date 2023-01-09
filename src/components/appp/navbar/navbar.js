import React from "react";
import img1 from "..//img/Vector.png"
import "..//navbar/navbar.css"

class Navbar  extends  React.Component {
    render(){
        return(
            <div className="Navbar" >
            <div className="logo">
            <img  src = {img1} alt =""  />
            <p className="puma">PUMA</p>
            <div className="li" >
                <ul>
                    <li><span>Menu</span></li>
                    <li>About </li>
                    <li>Feature </li>
                    <li>Gallary </li>
                    <button className="btn">Buy now</button>
                </ul>
                
            </div>


            </div>
                
            </div>

        )
    }
}
export default Navbar