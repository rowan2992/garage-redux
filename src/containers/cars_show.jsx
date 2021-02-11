import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { deleteCar } from '../actions';

class CarsShow extends Component {

  handleClick = () => {
    this.props.deleteCar(this.props.car, () => {
      this.props.history.push('/'); // Navigate after submit
    });
  }

  render() {
    return (
      <div className="car-container">
        <div className="car-card">
          <div className="car-details">
            <div className="plate">{this.props.car.plate}</div>
            <button onClick={this.handleClick}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { deleteCar: deleteCar },
    dispatch
  );
}

function mapReduxStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    car: reduxState.cars.find((car) => car.id === id),
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CarsShow);
