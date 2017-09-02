import React, { Component } from 'react';
import './validation.css';

export default OriginalComponent =>
  class validation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          errorClass={this.errorClass()}
        />
      );
    }

    handleChange = ev => {
      let value = ev.target.value;
      this.setState({
        value: value
      });
    };
    errorClass() {
      if (this.state.value) {
        let valueLength = this.state.value.length;
        const { dataMax: max, dataMin: min } = this.props;
        return valueLength > max || valueLength < min ? 'ValidationError' : '';
      }
    }
  };
