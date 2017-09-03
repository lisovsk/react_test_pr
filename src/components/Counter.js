import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../AC';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handlerInctement}>Increment</button>
      </div>
    );
  }
  handlerInctement = () => {
    console.log('---', 'increment');
    let { increment } = this.props;
    increment();
  };
}

// let mapSateTopProps = state => ({
//   counter: state.count
// });

// const mapToDispatch = {
//   increment
// };

// const decorator = connect(mapSateTopProps, mapToDispatch);

// export default decorator(Counter);

export default connect(
  state => ({
    counter: state.count
  }),
  { increment }
)(Counter);
