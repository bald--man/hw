// Core
import React, { PureComponent } from 'react';
import { func, string, number, array } from 'prop-types';

// Components
//import Like from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';
import Remove from 'theme/assets/Remove';
import Checkbox from 'theme/assets/Checkbox';
import Star from 'theme/assets/Star';
import Edit from 'theme/assets/Edit';

// Instruments
import Styles from './styles.m.css';

export default class Task extends PureComponent {

    static propTypes = {
        //_completedTask:  func.isRequired,
        //_favoriteTask:   func.isRequired,
        _removeTask:     func.isRequired,
        id:              string.isRequired,
        task:            string.isRequired,
    };

    constructor () {
        super();

        this._removeTask = this._removeTask.bind(this);
        this._editTask = this._editTask.bind(this);
        //this._completedTask = this._completedTask.bind(this);
        //this._favoriteTask = this.v.bind(this);

        this.state = { disabled: true };
    }

    _editTask () {
        this.setState({ disabled: !this.state.disabled });
    }

    _getTaskShape = ({
        id = this.props.id,
        completed = this.props.completed,
        favorite = this.props.favorite,
        message = this.props.message,
    }) => ({
        id,
        completed,
        favorite,
        message,
    });

    _removeTask () {
        const { _removeTask, id } = this.props;

        _removeTask(id);
    }

    render () {
        const { task, _favoriteTask, id, likes } = this.props;

        return (
            <Consumer>
                {(context) => (
                    <li className = { Styles.task }>
                        <div className = { Styles.content }>
                            <Checkbox
                                inlineBlock
                                //checked = { this._completedTask }
                                className = { Styles.toggleTaskCompletedState }
                                color1 = '#3B8EF3'
                                color2 = '#FFF'
                                //onClick = { this._completedTask }
                            />
                            <input
                                defaultValue = { task }
                                disabled = { this.state.disabled ? "disabled" : "" }
                                maxLength = { 50 }
                                type = { 'text' }
                                onChange = { this._updateTask }
                                onKeyPress = { this._submitOnEnter }
                            />
                        </div>
                        <div className = { Styles.actions }>
                            <Star
                                inlineBlock
                                className = { Styles.toggleTaskFavoriteState }
                                color1 = '#3B8EF3'
                                color2 = '#000'
                                onClick = { this._favoriteTask }
                            />
                            <Edit
                                inlineBlock
                                className = { Styles.updateTaskMessageOnClick }
                                color1 = '#3B8EF3'
                                color2 = '#000'
                                onClick = { this._editTask }
                            />
                            <Remove
                                inlineBlock
                                color1 = '#3B8EF3'
                                color2 = '#000'
                                onClick = { this._removeTask }
                            />
                        </div>
                    </li>
                )}
            </Consumer>
        );
    }
}
