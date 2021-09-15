import { Route, Switch } from "react-router-dom";
import Work from "../pages/Work/Work";
import Home from "../pages/Home/Home";
import React, { useState } from "react";
import { TimeProvider } from "../context/timecontext";

function App() {
  return (
    <React.Fragment>
      <TimeProvider>
        <div className="mx-auto lg:w-1/3 md:w-2/3 md:border  ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/start" component={Work}></Route>
          </Switch>
        </div>
      </TimeProvider>
    </React.Fragment>
  );
}

export default App;
