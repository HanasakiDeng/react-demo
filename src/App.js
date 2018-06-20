import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Topics from './views/Topics/index';
import TopicDetail from './views/TopicDetail/index';
import './common/scripts/utils'


export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact from='/' to='/topics' />
                <Route exact path='/topics' component={Topics} />
                <Route path="/topic/:id" component={TopicDetail} />
            </Switch>
        )
    }

}

