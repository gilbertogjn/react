import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { Fragment } from 'react';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  )
}

export default App;
