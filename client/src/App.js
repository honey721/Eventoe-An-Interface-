import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Home from "./pages/home/Home";
// import Hotel from "./pages/hotel/Hotel";
// import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;