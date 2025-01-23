import React from 'react'
import { BrowserRouter as Router, Routes, NavLink, Route } from 'react-router-dom';
// import Task1 from './Components/Task1/Task1'
import CreateNote from './Components/Task2/CreateNote';
import NoteList from './Components/Task2/NoteList'
import Navbar from './Components/Task2/Navbar';
import UpdateNote from './Components/Task2/UpdateNote';

const AppContent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/createnote' element={<CreateNote />} />
        <Route path='/updatenote/:noteId' element={<UpdateNote/>} />
      </Routes>
    </>
  );
};


const App = () => {
  return (
    <>
      {/* <Task1/> */}
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App
