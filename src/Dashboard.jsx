import Allbutton from "./components/Allbutton";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Pic from "./components/Pic";
import Moreshow from "./components/Moreshow";
import Footer from "./components/Footer";

function Dashboard() {
    return(
        <div className="w-screen h-screen items-center justify-center">
      <Navbar />
      <Pic />
      <Allbutton />
      
      <div className="flex flex-wrap gap-4 p-4 m-4 items-center">
          <Card image="/icon/image.png" />
          {/* <Card image="/icon/containerimg.png" />
          <Card image="/icon/Imagecontainer1.png" />
          <Card image="/icon/image5.png" />
          <Card image="/icon/imagecontainer2.png" />
          <Card image="/icon/imagecontainer3.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
          <Card image="/icon/image.png" />
           */}
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