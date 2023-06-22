import React from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import Home from './routes/Home';
import NossoProduto from './routes/NossoProduto';
function App() {

  return (
    <div className="App">
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NossoProduto" element={<NossoProduto />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
