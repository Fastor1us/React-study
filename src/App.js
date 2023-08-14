import React from 'react';
// import Counter from './components/Counter'
// import ClassCounter from './components/ClassCounter'
import './styles/App.css'

function App() {
  
  return (
    <div className="App">
      
      {/* <Counter/>
      <ClassCounter/> */}

      <div className="post">
        <div className="post__content">
          <strong>1. Основы React</strong>
          <div>
            React - веб-фреймворк, свободное и открытое ПО, библиотека JS
          </div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>

    </div>
  );

}

export default App;
