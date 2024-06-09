import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TimeLine } from "./pages/TimeLine";
import { Header } from "./header/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<TimeLine />} />
      </Route>
    </Routes>
  );
}

export default App;
