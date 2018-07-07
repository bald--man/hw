// Core
import React, { Component } from 'react';

// Components
import { Consumer } from 'components/HOC/withProfile';
import Checkbox from 'theme/assets/Checkbox';

// Instruments
import Styles from '../Scheduler/styles.m.css';

export default class Footer extends Component {
    render () {

        return (
            <Consumer>
                {(context) => (
                    <footer>
                        <Checkbox
                            block
                            //checked = { completed }
                            color1 = '#000'
                            color2 = '#FFF'
                            //onClick = { this._comleteTask }
                        />
                        <span className = { Styles.completeAllTasks }>Планировщик задач</span>
                    </footer>
                )}
            </Consumer>
        );
    }
}
