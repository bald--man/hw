// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

export default class Complete extends Component {
    render () {
        const html = [];
        const { data } = this.props;
        let self = this;

        Object.keys(data).forEach(function(key){
            if (data[key].done !== false) {
                html.push(<Task index={key} task={data[key].task} status={data[key].done} changeDone={self.props.changeDone} />)
            }
        });

        return (
            <div>
                <ul className = { Styles.complete } >{html}</ul>
            </div>
        );
    }
}
