import React from "react"
import img1 from "..//img/Vector.png"
import "..//footer/footer.css"

class Footer extends React.Component {
    render(){
        return(
       <div className="footer" >
        <div className="footerbox" >
        <img  src = {img1} alt =""  />
            <p className="puma">PUMA</p>
            <p>10 New Town Street, V2 <br/> 5NW, Newstate, USA.</p>
            <p>nishonboyevdiyorbek16@gmail.com</p>
        </div>
        <div className="footerbox" >
           <h3>Our services</h3>     
            <p>About us</p>
            <p>Feature</p>
            <p>Gallary</p>
        </div>
        <div className="footerbox" >
           <h3>Support</h3>     
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
            <p>Support System</p>
        </div>
        <div className="footerbox" >
           <h3>Contact us</h3>     
            <p>Lorem ipsum dolor sit amet <br/> consectetur adipiscin.</p>
            <div className="input1" >
           <input className="input" type="text" placeholder="Enter your email address" />
           <button className="send" >Send</button>
           </div>
        </div>
       </div>
        )
    }
}


export default Footer