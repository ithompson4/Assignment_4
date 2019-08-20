import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Assignment 4 - SpaceX in ReactJS</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">History</Link>
                    </li>
                    <li>
                        <Link to="/rockets">Rockets</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;