import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/nav";

import { Switch, Route} from "react-router-dom";
import Address from "./components/address";
import Review from "./components/reviews";
import AddReview  from "./components/addreview";
import UpdateReview  from "./components/updatereview";

function App() {
  return (
    <div className="container">
      <Nav />
      
      <Switch>
      <Route path="/address" component={Address} />
      
      <Route path="/reviews" component={Review} />
      <Route path="/addreview" component={AddReview} />
      <Route path="/updatereview" component={UpdateReview} />
      
      </Switch>

    
    </div>
  );
}

export default App;
