import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import TaxPage from './components/TaxPage/TaxPage';
import AdminPage from './components/AdminPage/AdminPage';
import AccountantPage from './components/AccountantPage/AccountantPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/tax" element={<TaxPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/accountant" element={<AccountantPage />}></Route>
    </Routes>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
