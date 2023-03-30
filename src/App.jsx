import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header, Home, Footer, PageNotFound, MovieDetail } from './components';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
