import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Counter from "./Mini/Counter/Counter.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/counter" element={Counter} />
      </Routes>
    </Router>
  );
}

export default App;
