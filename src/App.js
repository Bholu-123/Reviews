import React from 'react';
import Reviews from './Components/review';
import './Styles/style.css';

const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <Reviews/>
    </div>
  );
}

export default App;
