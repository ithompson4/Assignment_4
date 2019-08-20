import React from 'react';
import styles from './History.module.css';

// Import Components
import Card from '../../components/Card/Card';

const History = (props) => {
    const { spacex } = props;
    return (
        <div className={styles.history}>
            {spacex.map((item) => {
                return (
                    <section key={item.title}>
                        <Card>
                            <h2>{item.title}</h2>
                            <p><span>Event date utc: </span>{item.event_date_utc}</p>
                            <p><span>Event date unix: </span>{item.event_date_unix}</p>
                            <p>{item.details}</p>
                            <a href={item.links.wikipedia} target="_blank" rel="noopener noreferrer">Read More...</a> 
                        </Card>
                    </section>
                )
            })}
        </div>
    );
}

export default History;