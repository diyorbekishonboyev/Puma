import React from "react"
import Puma from "..//img/puma.png"
import "..//main7/main7.css"



class Main7 extends React.Component {
    render(){
        return  (
     <div className="main7" >
        <div className="pumaimg" >
            <img src = {Puma} alt="img" />
        </div>
        <div className="pumatext" >
            <h1>Sign up to our Newsletter</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sagittis, Atiam lorem sed justo amet viverra in a.</p>
           <div className="input" >
           <input className="input" type="text" placeholder="Enter your email address" />
           <button className="send" >Send</button>
           </div>

        </div>

     </div>
        )
    }
}


export default Main7