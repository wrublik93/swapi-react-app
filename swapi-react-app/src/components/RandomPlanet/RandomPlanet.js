import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../Spinner';

import './RandomPlanet.css';

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*20 + 2);
    this.swapiService
    .getPlanet(id)
    .then(this.onPlanetLoaded);
  };

  render() {

    const { planet: {id, planetName, climate, terrain, population, rotationPeriod, diameter }, loading } = this.state;

    if (loading) {
      return (
        <div className="random-planet jumbotron rounded">
          <Spinner />
        </div>
      )
    };

    return (
      <div className="random-planet jumbotron rounded">
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
      </div>
    );
  };
};

export default RandomPlanet;
