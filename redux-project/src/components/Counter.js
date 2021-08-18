import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const {counter, showCounter} = useSelector(state => state);
  const toggleCounterHandler = () => {
    dispatch({type:'toggleCounter'})
  };

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  };

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 5});
  };


  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter &&<div className={classes.value}>{counter}</div>}
      
      
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component{
//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   toggleCounterHandler(){

//  }
  

//   render(){
//     return (<main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
      
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      
      
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>)
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
