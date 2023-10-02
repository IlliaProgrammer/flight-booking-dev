import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Flight from "./pages/flight/Flight";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<List/>}/>
        <Route path="/flights/:id" element={<Flight/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </div>
  );
}

export default App;
