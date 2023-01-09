import React from "react";
import "..//last-main/last-main.css"
import user4 from "..//img/quality2.png"
import user5 from "..//img/quality1.png"
import user3 from "..//img/user3.png"
import user7 from "..//img/lasting.png"

class Mainlast extends React.Component {
    render(){
        return(
            <div className = "lastMain" >
            <h3><span>FEATURE</span></h3>
            <h1>We have best feature in Shoes</h1>
            <div className="boxs" >
                <div className="box1" >
                 <img className="user4" src ={user4} alt="" />
                 <img className="user5" src ={user5} alt="" />
                 <h1 className="qu" >Quality</h1>
                 <p className="p" >Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                 <p className="p2" ><span>Read more</span><i class="fa-solid fa-chevron-right"></i></p>
                </div>
                <div className="box2" >
                <img className="user6" src ={user4} alt="" />
                    <img className="user3" src ={user3} alt="" />
                    <h1 className="qu" >Flexible</h1>
                 <p className="p" >Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                 <p className="p2" ><span>Read more</span><i class="fa-solid fa-chevron-right"></i></p>


                </div>
                <div className="box3" >
                <img className="user6" src ={user4} alt="" />
                    <img className="user3" src ={user7} alt="" />
                    <h1 className="qu" >Flexible</h1>
                 <p className="p" >Lorem ipsum dolor sit consectetur adipiscing elit. Viverra in ul</p>
                 <p className="p2" ><span>Read more</span><i class="fa-solid fa-chevron-right"></i></p>
                

                </div>
            </div>



            </div>
        )
    }
}


export default Mainlast