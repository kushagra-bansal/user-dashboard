import React from 'react';
import logo from './logo.svg';
import './App.css';
import response from './utils/demo/tableData'
import Dashboard from './pages/Dashboard';
// import newResponse from './utils/demo/newTableData'
// import imageData from './utils/demo/pictures'


// const arr = [];
// for(let i = 0; i<45; i++){
//   Object.assign(newResponse[i], {avatar: imageData[i].picture.medium});
//   arr.push(newResponse[i]);
// }
// console.log(JSON.stringify(arr))

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
