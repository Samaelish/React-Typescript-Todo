import React from 'react';
import './App.css';

function App() {

  return (
    <div className='container'>
      <h1>React with TypeScript</h1>
      <form>
        <label htmlFor="userName">Имя: </label>
        <input 
          type="text" 
          id="userName" 
          name="name" 
          value="" 
          />
        <label htmlFor="userAge">Возраст: </label>
        <input 
          type="number" 
          id="userAge" 
          name="age" 
          value="" />
        <label htmlFor="userJob">Профессия: </label>
        <input 
          type="text" 
          id="userJob" 
          name="job" 
          value="" />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App;