import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as timerActions from '../../actions/timerActions';

import Timer from './Timer';

const TimerContainer = (props) => {

  const incrementCounter = (value) => {
    props.incrementCounter(value);
  };

  const decrementCounter = (value) => {
    props.decrementCounter(value);
  };

  return (
      <Timer
        counter={props.counter} 
        incrementCounterOnClick={val => incrementCounter(val)}
        decrementCounterOnClick={val => decrementCounter(val)}
      />
  )
};

TimerContainer.propTypes = {
  counter: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
  return { counter: state.timer.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: val => dispatch(timerActions.incrementCounter(val)),
    decrementCounter: val => dispatch(timerActions.decrementCounter(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerContainer);

