import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useLocation, BrowserRouter } from "react-router-dom";

import Login from './page/login';
import Reg from './page/reg';
import Main from './page/main';
import Forum from './page/forum';
import Qst from './page/questionnaire';
import Review from './page/review';
import ReviewView from './page/reviewview';

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
