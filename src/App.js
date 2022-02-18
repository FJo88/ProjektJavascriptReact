import Home from "./pages/HomePage"
import AddCard from "./pages/AddCardPage"
import { Switch , Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <header>
      <h1>E-Wallet Project</h1>
    </header>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props}/>}/>
        <Route path="/addcard" render={(props) => <AddCard {...props}/>}/>
      </Switch>
      
    </div>
  );
}

export default App;
