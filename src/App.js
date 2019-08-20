import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// Import Components
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import RocketDetails from './components/RocketDetails/RocketDetails';

// Import Pages
import History from './pages/History/History';
import Rockets from './pages/Rockets/Rockets';
import About from './pages/About/About';

function App() {
  const [loading, setLoading] = useState(true);
  const [spacex, setSpacex] = useState([]);
  const [rockets] = useState([]);
  const [company, setCompany] = useState({});

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      clearTimeout(loadingTimer);

      axios.get('https://api.spacexdata.com/v3/history').then((response) => {
        setSpacex(response.data);
        setLoading(false);
      });

      axios.get('https://api.spacexdata.com/v3/info').then((response) => {
        setCompany(response.data);
        setLoading(false);
      });

    }, 1000);
  }, []);

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <History spacex={spacex} />
              );
            }} />
            <Route exact path="/rockets" render={() => {
              return (
                <Rockets rockets={rockets} />
              );
            }} />
            <Route exact path="/about" render={() => {
              return (
                <About company={company} />
              );
            }} />
            <Route path="/rockets/:rocketId" component={RocketDetails} />
          </Switch>
        )}
      </div>
    </div>
  );
}

export default App;