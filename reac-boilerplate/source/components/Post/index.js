// Core
import React, { Component } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';

// Components
import { Consumer } from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment: propTypes.string.isRequired,
        created: propTypes.number.isRequired,
    };

    render () {
        const { comment, created } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img src = { context.avatar } />
                        <a>{ context.currentUserFirstName } { context.currentUserLastName }</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:s a')}</time>
                        <p>{ comment }</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
