import Dashboard from "./Dashboard"
import Homepage from "./Homepage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/otega" element={<Homepage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App