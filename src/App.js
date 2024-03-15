import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import ConstantList from './ConstantList';
import './App.css';
// Import other components if necessary

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/userlist" element={<UserList />} />
          <Route path="/constantlist" element={<ConstantList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
