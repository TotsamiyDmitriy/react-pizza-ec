import './app.scss';
import Button from './components/Main/Button';
import { Header } from './components';
import { Main, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/cart" Component={Cart} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
