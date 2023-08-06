import React, { Component } from 'react';
import styles from './modal.module.css'

class Modal extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'visible';
    }

    render() {
        const { toggle, children } = this.props;

        return (
            <div className={styles.modal}
                onClick={(e) => {
                    e.stopPropagation();
                    toggle();
                }}
            >
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>{children}</div>
            </div>
        );
    }
}

export default Modal;