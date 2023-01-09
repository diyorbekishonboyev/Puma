import React from "react";
import img2 from "..//img/trausers.png"
import "..//main-info/main-info.css"
import SmalMain from "../small-main/small-main";



class Info  extends  React.Component {
    render(){
        return(
         <><div className="container">
                <div className="text">
                    <h1>Life is better in running <span>shoes.</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo ultrices </p>
                </div>
                <div className="Img">
                    <img src={img2} alt="" />
                </div>

            </div><SmalMain /></>
         


        )
    }
}
export default Info