import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './Rockets.module.css';

// Import Components
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';

const Rockets = (props) => {
    const [loading, setLoading] = useState(true);
    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            clearTimeout(loadingTimer);

            axios.get('https://api.spacexdata.com/v3/rockets').then((response) => {
                setRockets(response.data);
                setLoading(false);
                });
            }, 1000);
        }, []);
    
    return (
        <div className={styles.rockets}>
            {loading ? (
                <Loading />
            ) : (
                <React.Fragment>
                    {rockets.map((item) => {
                        return (
                            <section className="link" key={item.id}>
                                <Link to={`/rockets/${item.rocket_id}`}>
                                    <Card>
                                        <h2>{item.rocket_name}</h2>
                                        <p><span>Cost per launch: </span>{item.cost_per_launch}</p>
                                        <p><span>Success Rate: </span>{item.success_rate_pct}</p>
                                    </Card>
                                </Link>
                            </section>
                        )
                    })}
                </React.Fragment>
            )}
        </div>
    );
}

export default Rockets;