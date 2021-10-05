import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./components/nav";
import { Switch, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Review from "./components/reviews";
import AddReview  from "./components/addreview";
function App() {
  return (
    <div className="App">
      <Nav />
      
      <Switch>
      <Route path="/reviews" component={Review} />
      <Route path="/addreview" component={AddReview} />
      </Switch>

    
    </div>
  );
}

export default App;
