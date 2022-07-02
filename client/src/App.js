import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./components/Get/Single";

// import SettingsCreate from "./components/User settings/SettingsCreate";
import Upload from "./pages/create/Upload";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Upload />} />
        <Route path="/creation/:id" element={<Single />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
