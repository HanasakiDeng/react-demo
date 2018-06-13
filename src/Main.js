import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './home/Home';
import Detail from './detail/Detail';
import React, {Component} from 'react';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path="/topic/:id" component={Detail}/>
                </Switch>
            </Router>
        )

    }

}

