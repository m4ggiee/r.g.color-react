// import logo from './logo.svg';
// import './App.css';

import React, { useState } from 'react';
import './App.css';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function App() {
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());

  const changeColor = () => {
    setBackgroundColor(generateRandomColor());
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <h1>Kreative Color Generator</h1>
      <button onClick={changeColor}>Generate Color</button>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
