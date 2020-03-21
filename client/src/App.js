import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import {
  Navbar, Footer, Landing,
  Register, Login
} from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
