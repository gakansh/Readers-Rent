import './App.css';
import React, { useState } from 'react';
import AddList from './components/AddList';
import Users from './places/pages/newPage';
import ListHandler from './components/ListHandler';
import { BrowserRouter as Router , Switch , Route ,Redirect} from 'react-router-dom';

const App = () => {

  const [List, setList] = useState([{ id: 0, text: 'Default-Text' }]);

  const f1 = (newItem) =>{
      setList(List.concat(newItem));
  };


  // setList(List.concat());


  return (
    
    <Router>
      <Switch>
      <Route path="/" exact>
        <div>
          <center><h1><b>Welcome to Reader's Rent</b></h1></center>
          <ListHandler ob1={List} />
          <AddList nh={f1} />
        </div>
      </Route>

      <Route path="/new" exact>
      < Users />
      </Route>
      <Redirect to="/"  />
      </Switch>

    </Router>

  );
};

export default App;
