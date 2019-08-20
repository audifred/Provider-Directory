import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PracticeDetails from './PracticeDetails';
import Confirm from './Confirm';

export class CreateProvider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.toNextStep = this.toNextStep.bind(this);
    this.toPrevStep = this.toPrevStep.bind(this);
    this.restartForm = this.restartForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      practiceName: '',
      specialty: ''
    };
  }
  handleChange(input) {
    return e => {
      this.setState({ [input]: e.target.value });
    };
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addProvider(this.state.firstName);
    this.setState({
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      practiceName: '',
      specialty: ''
    });
  }

  toNextStep() {
    this.setState(state => ({
      step: state.step + 1
    }));
  }

  toPrevStep() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  restartForm() {
    const { step } = this.state;
    this.setState({
      step: step - 2
    });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, practiceName, specialty } = this.state;
    const values = { firstName, lastName, email, practiceName, specialty };

    switch (step) {
      case 1:
        return (
          <UserDetails
            toNextStep={this.toNextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <PracticeDetails
            toPrevStep={this.toPrevStep}
            toNextStep={this.toNextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            handleSubmit={this.onSubmit}
            toPrevStep={this.toPrevStep}
            values={values}
          />
        );
    }
  }
}

export default CreateProvider;
