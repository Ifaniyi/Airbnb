import Allbutton from "./components/Allbutton";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Pic from "./components/Pic";
import Moreshow from "./components/Moreshow";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Pic />
      <Allbutton />
      
      <div className="flex flex-wrap gap-1 items-center">
          <Card image="/icon/image.png" />
          <Card image="/icon/containerimg.png" />
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
          <Card image="/icon/image.png" />
          
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

export default App
