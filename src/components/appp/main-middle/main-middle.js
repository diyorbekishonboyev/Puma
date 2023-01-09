import React from "react";
import photo from "..//img/Rectangle 3.png"
import "..//main-middle/main-middle.css"
import user1 from "..//img/vidio.png"
import user2 from "..//img/vidio2.png"


class Middle extends React.Component {
    render(){
        return(
            <div className="middle" >
            <div className="title" >
                <span>VIDIO</span>
                <h1>Desire the feel of satisfaction.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas leo ultrices commauris risus.</p>
            </div>
            <div className="photo" >
                <img  src = {photo} alt ="" />
                <img className="user1" src = {user1} alt ="" />
                <img className="user2" src = {user2} alt ="" />
            </div>
            </div>
        )
    }
}
export default Middle