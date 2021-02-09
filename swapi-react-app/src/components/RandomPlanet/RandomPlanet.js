import React, { Component } from 'react';

import './RandomPlanet.css';

class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img
          alt="Random Planet"
          className="random-planet-image"
          src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
        />
        <div>
          <h4>
            Planet Name
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population:</span>
              <span>123456789</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period:</span>
              <span>123</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter:</span>
              <span>12345</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
};

export default RandomPlanet;
