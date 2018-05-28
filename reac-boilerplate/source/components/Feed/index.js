// Core
import React, { Component } from 'react';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            { id: '1', comment: 'Hi there!', created: 1526825076849 },
            { id: '2', comment: 'Lets go!', created: 1728825076855 },
            { id: '3', comment: 'Fuck you!', created: 1936825076949 }
        ],
        isSpinning: null,
    };

    render () {
        const { posts } = this.state;

        const postsJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post } />;
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning />
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}
