import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import SubmitComplaint from "./pages/SubmitComplaint";
import TrackComplaints from "./pages/TrackComplaints";
import LostFound from "./pages/LostFound";
import Updates from "./pages/Updates";
import "./index.css";
import "./styles/layout.css";
import "./styles/pages.css";
import "./styles/components.css";
function App() {
  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/submit-complaint" element={<SubmitComplaint />} />
          <Route path="/track-complaints" element={<TrackComplaints />} />
          <Route path="/lost-found" element={<LostFound />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
     
    </BrowserRouter>
  );
}
export default App;