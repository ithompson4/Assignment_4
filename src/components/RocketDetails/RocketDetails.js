import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './RocketDetails.module.css';

// Import Components
import Card from '../../components/Card/Card';
import Loading from '../../components/Loading/Loading';

const RocketDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [rocket, setRocket] = useState({})

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
          clearTimeout(loadingTimer);
          const id = props.match.params.rocketId;
          const url = `https://api.spacexdata.com/v3/rockets/${id}`;
          
          axios.get(url).then((response) => {
            setRocket(response.data);
            setLoading(false);
          });
        }, 1000);
      }, [props.match.params.rocketId]);

      return (
        <div className={styles.rocket}>
            {loading ? (
              <Loading />
            ) : (
              <section>
                 <Card>
                    <h2>{rocket.rocket_name}</h2>
                    <p><span>Rocket Type: </span>{rocket.rocket_type}</p>
                    <p><span>First Flight: </span>{rocket.first_flight}</p>
                    <p><span>Country: </span>{rocket.country}</p>
                    <p><span>Company: </span>{rocket.company}</p>
                    <p><span>Height, feet: </span>{rocket.height.feet}</p>
                    <p><span>Diameter, feet: </span>{rocket.diameter.feet}</p>
                    <p><span>Mass, lb: </span>{rocket.mass.lb}</p>
                    <p>{rocket.description}</p>
                    <Link to="/rockets">Go Back</Link>
              </Card>
              </section>
            )}          
        </div>
    );
}

export default RocketDetails;
