// import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // console.log(React.createElement('h1', null, 'test'))
    { 
      element: "section", 
      children: [
          { 
              element: "div", 
              children: [
                  { 
                      element: "h1", 
                      children: "Заголовок"
                  },
                  { 
                      element: "h2", 
                      children: "Подзаголовок"
                  }
              ] 
          },
          { 
              element: "div", 
              children: [
                  { 
                      element: "p", 
                      children: "Параграф"
                  }
              ] 
          }
      ] 
  }
);
