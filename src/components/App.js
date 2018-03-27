import React, { Component } from 'react'
import Gallery from './Gallery'
import Home from './Home';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery} />
            </Switch>
            )

    }
}

export default App;