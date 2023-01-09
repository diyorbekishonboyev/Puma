import React from "react"
import "..//main6/main6.css"
import runimg from "..//img/runimg.png"
import people from "..//img/people.png"



class Main6 extends React.Component {
    render(){
        return(
         <div className="main6" >
         <h1>Testimonials</h1>
           <div className="bigbox" >
           <div className="runimg" >
            <img src={runimg} alt="" />
            </div>
            <div className="people" >
            <img src={people} alt="" />
            <h2>Their services was best and friendly</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tempor id faucibus quam lobortis.</p>
            <h3>Abram Korsgaard</h3>
            <p>Athletic</p>
            </div>
           </div>
         </div>
        )
    }
}


export default Main6