import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
    </Router>
  )
}

export default App
