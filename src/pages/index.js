import React from 'react';
import '../components/DarkModeToggleButton';
import DarkModeToggleButton from '../components/DarkModeToggleButton';

function App() {

  return (
    <>
      <h1>言ノ葉</h1>
      <p className='subtitle'>Flashcards on a web app.</p>
      <a href='/review' className='btn btn-accent'>Get Started</a>
      <DarkModeToggleButton />
    </>
  )
}

export default App;
