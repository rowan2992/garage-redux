import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { fetchCars } from '../actions';


class CarsIndex extends Component {

  componentWillMount() {
    console.log(this.props.garage);
    this.props.fetchCars(this.props.garage);
  }

  render() {
    return (
      <div>
        <Aside key="aside" garage={this.props.garage}>
          {/* <Link to="/cars/new">Add a car</Link> */}
        </Aside>
        <div className="list-container">
          <ul>
            <div className="car-details">
              <span>
                {this.props.cars.map((car) => {
                  return (
                    <li key={car.id}>
                      <Link to={`/cars/${car.id}`}>
                        <span>Plate: {car.plate}</span>
                        <span>Brand: {car.brand}</span>
                        <span>Owner: {car.owner}</span> 
                      </Link>
                    </li>
                  )
                })}
              </span>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars: fetchCars },
    dispatch
  );
}


function mapReduxStateToProps(reduxState) {
  return {
    cars: reduxState.cars,
    garage: reduxState.garage
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsIndex);
