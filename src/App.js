import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Components/Actions/ActionValue";

function App() {
  const myState = useSelector((state) => state.changeNumber);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input type="text" name="count" value={myState} />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
