import React from 'react';
import { Link } from "react-router-dom";
import styles from "./nav.css";

export function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.brand}></div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/trash">trash</Link>
                </li>
            </ul>
        </nav>
    )
}