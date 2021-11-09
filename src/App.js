import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {

  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route path="/" exact element={<NotesList />} />
          <Route path="/edit/:id" element={<CreateNote />}/>
          <Route path="/create" exact element={<CreateNote />} />
          <Route path="/user" exact element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
