// the Redux object is imported via cdn for this example;

// Reducer function that will update the state of the component
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

// crate the store object using the createStore() method from Redux which receives the Reducer
const { createStore } = Redux;
const store = createStore(counter);

// React Counter component to show the value of the state

const Counter = ({value}) => {
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

// function to update the DOM using react
const render = () => {
  ReactDOM.render(
   <Counter
      value={store.getState()}
   />,
    document.getElementById('root')
  );
}

// store fucntion to call a callback function after the state is updated. This call displayTotal again
store.subscribe(render);
render();

// JS event that allows the user dispatch an action when typing the keyboard
document.addEventListener("keydown", (e) => {
    console.log(e.key)
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        return store.dispatch({type: "INCREMENT"});
      case "ArrowDown":
        e.preventDefault();
        return store.dispatch({type: "DECREMENT"});
      default:
        return console.log("not a valid action")
  }
});
