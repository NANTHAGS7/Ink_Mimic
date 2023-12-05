import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Main from "./components/Main";
import ImageOne from "./components/ImageOne";
function App() {
  return (
    <Router>
     <div>
       <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/about" element={<ImageOne></ImageOne>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
