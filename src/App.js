import './App.css';
import React, { useState } from 'react';
import AddList from './components/AddList';
import ListHandler from './components/ListHandler';



const App = () => {

  const [List, setList] = useState([{ id: 0, text: 'Default-Text' }]);

  const f1 = (newItem) =>{
      setList(List.concat(newItem));
  };


  // setList(List.concat());


  return (

    <div>
      <center><h1><b>Welcome to Reader's Rent</b></h1></center>
      <ListHandler ob1 = {List}/>
      <AddList nh={f1}/>


    </div>







    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



  );
};

export default App;
