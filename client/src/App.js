import { ToastContainer} from 'react-toastify';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Addedit from "./pages/Addedit";
import Home from "./pages/Home";
import View from "./pages/View";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <ToastContainer position='top-center'/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/addContact" element={<Addedit/>}></Route>
        <Route path="/update/:id" element={<Addedit/>}></Route>
        <Route path="/view/:id" element={<View/>}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
