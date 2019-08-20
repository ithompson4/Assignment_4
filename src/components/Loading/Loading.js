import React from 'react';
import styles from './Loading.module.css';
import spinner from './spinner.gif';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <img src={spinner} alt="Loading..."/>
        </div>
    );
}

export default Loading;