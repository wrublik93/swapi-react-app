import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';

import './RandomPlanet.css';

class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    planetName: null,
    climate: null,
    terrain: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*20 + 2);
    this.swapiService
    .getPlanet(id)
    .then((planet) => {
      console.log(planet);
      this.setState({
        id,
        planetName: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
      })
    });
  };

  render() {

    const { id, planetName, climate, terrain, population, rotationPeriod, diameter } = this.state;

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
