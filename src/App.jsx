import Dashboard from "./Dashboard"
import Homepage from "./Homepage"
import Submit from "./Submitpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/second" element={<Homepage />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App