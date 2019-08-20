import React from 'react';
import styles from './About.module.css';

// Import Components
import Card from '../../components/Card/Card';

const About = (props) => {
    const { company } = props;
    return (
        <div className={styles.about}>
            <section>
                <Card>
                    <h2>Company Name: {company.name}</h2>
                    <p><span>Founded in: </span>{company.founded}</p>
                    <p><span>CEO: </span>{company.ceo}</p>
                    <p><span>COO: </span>{company.coo}</p>
                    <p><span>Valuation: </span>{company.valuation}</p>
                    <p><span>Summary: </span>{company.summary}</p> 
                </Card>
            </section>
        </div>
    );
}

export default About;