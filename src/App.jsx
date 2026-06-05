import { HashRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import "./App.css";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import More from "./Components/More";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;