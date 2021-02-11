import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

class CarsNew extends Component {

  onSubmit = (values) => {
    const garage = this.props.garage;
    this.props.createCar(values, garage, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }
  render() {
    const required = value => value ? undefined : 'Required'
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Model"
            name="model"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Owner"
            name="owner"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <Field
            label="Plate"
            name="plate"
            type="text"
            component={this.renderField}
            validate={required}
          />
          <button className="btn btn-primary" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Create Car
          </button>
        </form>
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    garage: reduxState.garage
  }
}

export default reduxForm({ form: 'newCarForm' })(
 connect(mapReduxStateToProps, { createCar })(CarsNew)
);