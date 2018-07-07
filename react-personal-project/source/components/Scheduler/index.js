// Core
import React, { Component } from 'react';

// Components
import Header from 'components/Header';
import Composer from 'components/Composer';
import Task from 'components/Task';
//import Complete from 'components/Complete';
import Footer from 'components/Footer';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';

export default class Scheduler extends Component {
    constructor () {
        super();

        this._createTask = this._createTask.bind(this);
        this._setTasksFetchingState = this._setTasksFetchingState.bind(this);
        this._removeTask = this._removeTask.bind(this);
    }

    state = {
        tasks: [
            { id: '1', task: 'Hi there!', completed: false },
            { id: '2', task: 'Lets go!', completed: false },
            { id: '3', task: 'Fuck you!', completed: false }
        ],
        isSpinning: false,
    };

    _setTasksFetchingState (state) {
        this.setState({
            isPostsFetching: state,
        });
    }

    async _createTask (task) {
        this._setTasksFetchingState(true);

        const post = {
            id: getUniqueID(),
            task,
        };

        await delay(1200);

        this.setState(({ tasks }) => ({
            tasks:           [post, ...tasks],
            isPostsFetching: false,
        }));
    }

    async _removeTask (id) {
        this._setTasksFetchingState(true);

        await delay(1200);

        this.setState(({ tasks }) => ({
            tasks:           tasks.filter((task) => task.id !== id),
            isPostsFetching: false,
        }));
    }

    changeDone (key) {
        //copy data
        const data = {...this.state.tasks};
        //change status
        data[key].done = !data[key].done;
        //update state
        this.setState({
            todos: data,
        });
    }

    render () {
        const { tasks, isPostsFetching } = this.state;

        const tasksJSX = tasks.map((task) => {
            return (
                <Task
                    key = { task.id }
                    { ...task }
                    _removeTask = { this._removeTask }
                />
            );
        });

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <Header />
                    <section>
                        <Composer _createTask = { this._createTask } />
                        <div>
                            <ul>
                                <div>
                                    {tasksJSX}
                                </div>
                            </ul>
                        </div>
                        {/* <Complete data = { this.state.todos } changeDone = { this.changeDone } /> */}
                    </section>
                    <Footer />
                </main>
                <Spinner isSpinning = { isPostsFetching } />
            </section>
        );
    }
}
