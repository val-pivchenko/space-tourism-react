import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <AnimatePresence exitBeforeEnter>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>

      </Router >
    </AnimatePresence>
  );
}

export default App;
