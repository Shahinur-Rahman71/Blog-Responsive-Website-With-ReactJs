import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../Page/Home'
import About from '../Page/About'
import Contact from '../Page/Contact'
import NoMatch from '../Page/NoMatch';
class Routing extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route component={NoMatch}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default Routing;