import Home from "./pages/home";
import Sketches from "./pages/sketches";
import Development from "./pages/development";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path='/sketches' element={<Sketches />} exact />
          <Route path='/development' element={<Development />} exact />
        </Routes>
    </Router>
  );
}

export default App;
