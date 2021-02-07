/* fetch('https://swapi.dev/api/people/1/')
  .then((res) => {
    return res.json();
  })
  .then((body) => {
    console.log(body);
  }) */

const getResource = async(url) => {
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
  });
