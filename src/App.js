import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import './App.css';
// Import other components if necessary

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
