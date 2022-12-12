//import logo from './logo.svg';
//import Form from './Componants/Form';
//import Appx from './Componants/Appx';
import Create from './Componants/Create';
import Read from './Componants/Read';
import Update from './Componants/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Create />}></Route>
      <Route exact path="/read" element={<Read />}></Route>
      <Route exact path="/update" element={<Update />}></Route>
     

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       {/* <Form /> */}
       {/* <Appx /> */}
       
       </Routes>
       </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
