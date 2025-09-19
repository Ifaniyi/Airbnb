import Allbutton from "./components/Allbutton";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Pic from "./components/Pic";
import Moreshow from "./components/Moreshow";
import Footer from "./components/Footer";
import NavIcon from "./components/NavIcon";

function Dashboard() {
    return(
        <div className="w-screen h-screen items-center justify-center">
      <Navbar />
      <NavIcon />
      <Pic />
      <Allbutton />
      
      <div className="flex flex-wrap gap-4 p-4 m-4 items-center">
          <Card />
          
      </div>

      <div className="justify-center items-center flex">
        <Moreshow />
      </div>

      <div>
        <Footer />
      </div>
    </div>
    )
}
export default Dashboard;