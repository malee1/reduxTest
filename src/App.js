import './App.css';
//use selector is used to allow the component to get access to the store
import { useSelector } from 'react-redux';
import { increment, decrement } from './actions';
//use dispatch is used to allow the component to access the actions
import { useDispatch } from 'react-redux'

function App() {

  //variables declared for use in the app
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      Counter {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Info</h3> : ''}
    </div>
  );
}

export default App;
