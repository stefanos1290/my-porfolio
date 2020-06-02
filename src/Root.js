import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Start from "./components/Start";
import Header from "./components/Header";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

const Root = () => {
  return (
    <BrowserRouter>
      <div className="route-containter">
        <Header />
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Root;
