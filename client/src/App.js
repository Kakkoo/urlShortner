import React from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Login';
import Login from './components/auth/Register';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component = {Landing} />
        <Route exact path="/register" component = {Register} />
        <Route exact path="/login" component = {Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;