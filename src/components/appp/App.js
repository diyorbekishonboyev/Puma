import './App.css'
import Navbar from './navbar/navbar'
import Info from './main-info/main-info'
import Middle from './main-middle/main-middle'
import Mainlast from './last-main/last-main'
import Mainbox from './main-box/main-box'
import Main6 from './main6/main6'
import Main7 from './main7/main7'
import Footer from './footer/footer'


const App = () => {
  return <div className="app">
      <Navbar/>
      <Info/>
      <Middle/>
      <Mainlast />
      <Mainbox />
      <Main6 />
      <Main7/>
      <Footer/>


    </div> 

}
export default App