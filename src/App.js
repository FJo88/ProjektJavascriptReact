import Home from "./pages/HomePage"
import AddCardPage from "./pages/AddCardPage"
import { Switch , Route} from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import {getHolder} from "./redux/cardListSlice"
import {useDispatch} from "react-redux"


function App() {

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getHolder());
  },[])

  
  
  return (
    <div className="App">
    <header>
      <h1>E-WALLET</h1>
    </header>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props}/>}/>
        <Route path="/addcard" render={(props) => <AddCardPage {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
