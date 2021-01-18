import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Discover from "./containers/Discover/Discover";
import Search from "./containers/Search/Search";
import About from "./containers/About/About"
import NavTabs from "./containers/NavTabs";
import Home from "./containers/Home/Home";

const App = () => {
    return (
        <Router>
            <NavTabs />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/Search" component={Search} />
        </Router>
      );
};

export default App;