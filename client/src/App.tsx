import { Routes, Route } from "react-router-dom";
import StartWindow from "./StartWindow";
import Identify from "./Identify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartWindow />} />
      <Route path="/Identify" element={<Identify />} />
    </Routes>
  );
}

export default App;
