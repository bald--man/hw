// Core
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

// Components
import { withProfile } from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

const Postman = (props) => {
    const animateEnPostman = (postman) => {
        fromTo(postman, 1, { opacity: 0, x: 250 }, { opacity: 1, x: 0 });
    };
    const animateExPostman = (postman) => {
        fromTo(postman, 1, { opacity: 1, x: 0 }, { opacity: 0, x: 250 });
    };

    return (
        <Transition
            appear
            in
            // onEnter = { animatePostman }
            onEntered = { animateExPostman }
            onEntering = { animateEnPostman }
            timeout = { 5000 }>
            <section className = { Styles.postman }>
                <img src = { props.avatar } />
                <span>Welcome online, { props.currentUserFirstName }</span>
            </section>
        </Transition>
    );
};

export default withProfile(Postman);
