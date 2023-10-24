import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import { SearchContextProvider } from "./context/SearchContext";
import Flight from "./pages/flight/Flight";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import AboutPage from "./pages/AboutPage/AboutPage";
import Team from "./pages/team/Team";
import Register from "./pages/Register/Register";

function App() {
  return (
   <div>
    <SearchContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<List/>}/>
        <Route path="/flights/:id" element={<Flight/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </SearchContextProvider>
   </div>
  );
}

export default App;
