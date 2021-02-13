import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';

import './RandomPlanet.css';

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  onError = (err) => {
    this.setState({ loading: false, error: true })
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*20 + 2);
    /* const id = 12000; */
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded)
    .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const hasContent = !(loading || error);
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasContent ? <PlanetView planet = {planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorIndicator }
        { spinner }
        { content }
      </div>
    );
  };
};

const PlanetView = ({ planet }) => {
  const { id, planetName, climate, terrain, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
          alt="Random Planet"
          className="random-planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <h4>
            { planetName }
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Climate:</span>
              <span>{ climate }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Terrain:</span>
              <span>{ terrain }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
};

export default RandomPlanet;
