import React from "react";
import "..//small-main/small-main.css"

class SmalMain extends React.Component {
    render() {
        return (
            <div className=" main">
           <div className="crad">
           <p className="sentences">Brand</p>
            <p>Puma <span><i class="fa-solid fa-chevron-down"></i></span></p>
            <div className="line" ></div>
           </div>
           <div className="crad">
           <p className="sentences">Person</p>
            <p>man <span><i class="fa-solid fa-chevron-down"></i></span></p>
            <div className="line" ></div>
           </div>
           <div className="crad">
           <p className="sentences">Size</p>
            <p>large <span><i class="fa-solid fa-chevron-down"></i></span></p>
            <div className="line" ></div>
           </div>
           <div className="crad">
           <p className="sentences" >Price</p>
            <p>150$ <span><i class="fa-solid fa-chevron-down"></i></span></p>
            <div className="line" ></div>
           </div>
           <button className="button">Buy now</button>
            </div>
        )
    }
}
export default SmalMain