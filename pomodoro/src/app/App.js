import "./App.css";
import { Route, Switch } from "react-router-dom";
import Work from "../pages/Work/Work";
import Home from "../pages/Home/Home";

function App() {
  return (
    <div className="mx-auto lg:w-1/3 md:w-2/3 md:border  ">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start" component={Work} />
      </Switch>
    </div>
  );
}

export default App;
