import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useLocation, BrowserRouter } from "react-router-dom";

import Login from './login/index';
import Reg from './reg/index';
import Main from './main';
import Forum from './forum';
import Qst from './questionnaire';
import Review from './review';
import ReviewView from './reviewView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path='/main' element={<Main />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/qst' element={<Qst />} />
          <Route path='/review' element={<Review />} />
          <Route path='/viewreview' element={<ReviewView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
