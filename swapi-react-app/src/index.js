/* fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    console.log(body);
  }) */

/* const getResource = async(url) => {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error(`Your request ${url}, received status: ${res.status}`);
  };
  const body = await res.json();
  return body;
};

getResource('https://swapi.dev/api/people/1sdd/')
  .then((body) => {
    console.log(body);
  })
  .catch((err) => {
    console.error('Could not fetch: ', err);
  }); */



class SwapiService {

  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if(!res.ok) {
      throw new Error(`Your request ${url}, received status: ${res.status}`);
    };
    return await res.json();
  };

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  };

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  };

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  };

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  };

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  };

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  };
};

const swapi = new SwapiService();

swapi.getAllPeople()
  .then((body) => {
    console.log(body);
  });

  swapi.getAllPlanets()
  .then((body) => {
    console.log(body);
  });

  swapi.getPlanet(3)
  .then((body) => {
    console.log(body);
  });

  swapi.getAllStarships()
  .then((body) => {
    console.log(body);
  });
