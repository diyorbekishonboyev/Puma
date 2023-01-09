import React from "react"
import "..//main-box/main-box.css"
import trauser1 from "..//img/trauser1.png"
import trauser2 from "..//img/trauser2.png"
import trauser3 from "..//img/trauser3.png"
import trauser4 from "..//img/trauser4.png"



class Mainbox extends React.Component {
    render(){
        return(
         <div className="mainbox">
                <p><span>GALLARY</span></p>
                <h1>40+ YEARS’ EXPERIENCE</h1>
                <div className="categories">
                    <p>Categories:</p>
                    <p>All</p>
                    <p><span>Male</span></p>
                    <p>Famale</p>
                    <p>Kids</p>
                </div>
                <div className="korzinka">
                    <div className="corzina">
                        <img src={trauser1} alt="" />
                        <h2>Puma RS-X Bold</h2>
                        <p>Size:Dubble-XL</p>
                        <p>Price:$200</p>
                        <button className="btn3">Buy now </button>
                    </div>
                    <div className="corzina">
                        <img src={trauser2} alt="" />
                        <h2>Puma Sneakers</h2>
                        <p>Size:Dubble-XL</p>
                        <p>Price:$180</p>
                        <button className="btn3">Buy now </button>
                    </div>
                    <div className="corzina">
                        <img src={trauser3} alt="" />
                        <h2>Puma Ferrari</h2>
                        <p>Size:Dubble-XL</p>
                        <p>Price:$190</p>
                        <button className="btn3">Buy now </button>
                    </div>
                    <div className="corzina">
                        <img src={trauser4} alt="" />
                        <h2>Puma Running</h2>
                        <p>Size:Dubble-XL</p>
                        <p>Price:$200</p>
                        <button className="btn3">Buy now </button>
                    </div>
                </div>
            </div>
        )
    }
   
}


export default Mainbox