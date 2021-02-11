// TODO: add and export your own actions
export const FETCH_CARS = 'FETCH_CARS';
export const CAR_POSTED = 'CAR_POSTED';
export const CAR_DELETED = 'CAR_DELETED';

const BASE_URL = `https://wagon-garage-api.herokuapp.com/`;

export function fetchCars(garage) {
  // TODO Simulate API
  const promise = fetch(`${BASE_URL}${garage}/cars`)
    .then(response => response.json())
  
  return {
    type: FETCH_CARS,
    payload: promise
  }
}

export function createCar(values, garage, callback) {

  const url = `${BASE_URL}${garage}/cars`;
  const body = values;

  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  
  return {
    type: CAR_POSTED,
    payload: promise
  }
}

export function deleteCar(car, callback) {
  console.log(car.id);
  console.log(history);
  const url = `${BASE_URL}cars/${car.id}`
  const promise = fetch(url, {
    method: 'DELETE',
  }).then(response => response.json())
    .then(callback);
  
  return {
    type: CAR_DELETED,
    payload: promise
  }
}
