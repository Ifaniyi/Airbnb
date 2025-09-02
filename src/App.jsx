import Allbutton from "./components/Allbutton";
import Card from "./components/Card";
import Navbar from "./components/Navbar"
import Pic from "./components/Pic";
import Moreshow from "./components/Moreshow";


function App() {
  return (
    <div>
      <Navbar />
      <Pic />
      <Allbutton />
      
      <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>

      <div className="justify-center items-center">
        <Moreshow />
      </div>

    </div>
  )
}

export default App
