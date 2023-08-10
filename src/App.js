import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useLocation, BrowserRouter } from "react-router-dom";

import Login from './login/index';
import Reg from './reg/index';
import Main from './main';
import Forum from './forum';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path='/main' element={<Main />} />
          <Route path='/forum' element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
