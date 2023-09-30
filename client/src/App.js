import {BroserRouter, Routes, Route} from "react-router-dom"
import Flight from "./pages/flight/Flight";
import Home from "./pages/home/Home";
import List from "./pages/list/List";

function App() {
  return (
   <div>
    <BroserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<List/>}/>
        <Route path="/flights/:id" element={<Flight/>}/>
      </Routes>
    </BroserRouter>
   </div>
  );
}

export default App;
