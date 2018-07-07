// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import { Provider } from 'components/HOC/withProfile';
import Scheduler from 'components/Scheduler';

const options = { };

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Provider value = { options }>
                <Scheduler { ...options } />;
            </Provider>
        );
    }
}
