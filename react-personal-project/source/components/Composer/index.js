// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Consumer } from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    static propTypes = {
        _createTask: PropTypes.func.isRequired,
    };

    constructor () {
        super();

        this._updateTask = this._updateTask.bind(this);
        this._submitComment = this._submitComment.bind(this);
        this._handleFormSubmit = this._handleFormSubmit.bind(this);
        this._submitOnEnter = this._submitOnEnter.bind(this);
    }

    state = {
        task: '',
    };

    _updateTask (event) {
        this.setState({
            task: event.target.value,
        });
    }

    _handleFormSubmit (event) {
        event.preventDefault();
        this._submitComment();
    }

    _submitComment () {
        const { task } = this.state;

        if (!task) {
            return null;
        }

        this.props._createTask(task);

        this.setState({
            task: '',
        });
    }

    _submitOnEnter (event) {
        const enterKey = event.key === 'Enter';

        if (enterKey) {
            event.preventDefault();
            this._submitComment();
        }
    }

    render () {
        //const { currentUserFirstName } = this.props;
        const { task } = this.state;

        return (
            <Consumer>
                {(context) => (
                    <>
                        <section className = { Styles.composer }>
                            <form onSubmit = { this._handleFormSubmit }>
                                <input
                                    maxLength = { 50 }
                                    placeholder = { 'Описaние моей новой задачи' }
                                    type = { 'text' }
                                    value = { task }
                                    onChange = { this._updateTask }
                                    onKeyPress = { this._submitOnEnter }
                                />
                                <button type = 'submit'>Добавить задачу</button>
                            </form>
                        </section>
                    </>
                )}
            </Consumer>
        );
    }
}
