import { BrowserRouter, Route, Routes} from "react-router-dom";
import './styles/styles.scss'


// COMPONENTS
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";


function App() {

return (
<>
  <BrowserRouter>
      
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/register" element={<Register/>}  />


    </Routes>
      
      
  </BrowserRouter>
</>
)

}

export default App
