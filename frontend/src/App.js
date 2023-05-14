import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SessionExample from './components/SessionExample';

const App = () => {
  return (
      <Router>
        <div>
          <h1>Your Application</h1>

          <Routes>
            <Route index element={<Home />} />
            <Route path="/session" element={<SessionExample />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  );
};

const Home = () => {
  return <p>Welcome to the Home page!</p>;
};

const NotFound = () => {
  return <p>404 - Page not found</p>;
};

export default App;
