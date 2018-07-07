// Core
import React, { Component } from 'react';

// Components
import { Consumer } from 'components/HOC/withProfile';
import Search from 'components/Search';

// Instruments
import Styles from './styles.m.css';

export default class Header extends Component {
    render () {

        return (
            <Consumer>
                {(context) => (
                    <header className = { Styles.header }>
                        <h1>Планировщик задач</h1>
                        <Search />
                    </header>
                )}
            </Consumer>
        );
    }
}
