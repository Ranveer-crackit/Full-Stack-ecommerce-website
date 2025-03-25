import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Product from './components/Product';

const App = () => {
  return (
    <div className="container mt-4">
      <nav>
        <Link to="/signin" className="btn btn-primary me-2">Sign In</Link>
        <Link to="/signup" className="btn btn-secondary me-2">Sign Up</Link>
        <Link to="/product" className="btn btn-success">Products</Link>
      </nav>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;