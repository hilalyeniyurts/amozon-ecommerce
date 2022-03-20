import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

        <Route path='/login' element={
          <div>
          <Login/>   
          </div>
          
      }/>

          <Route path="/checkout" element={
            <div>
              <Header />
              <Checkout/>
            </div>
           }/>

          <Route path='/' element={
            <div>
              <Header />
              <Home /> 
            </div>
           }/>

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
