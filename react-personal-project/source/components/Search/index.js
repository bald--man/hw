// Core
import React, { Component } from 'react';

// Instruments
//import Styles from './styles.m.css';

export default class Header extends Component {
    render () {
        const {
            currentUserFirstName,
            currentUserLastName,
            avatar,
        } = this.props;

        return (
            <input
                //maxLength = { 50 }
                placeholder = { 'Поиск' }
                type = { 'search' }
            />
        );
    }
}
