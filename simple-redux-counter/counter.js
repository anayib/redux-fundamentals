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

const { createStore } = Redux;
const store = createStore(counter); // the createStore function gets a reducer as an argument to create the store object

const displayTotal = () => {
  const h1 = document.getElementsByTagName("h1");
  h1[0].innerText = store.getState();
}

// function to update what is display in the HTML element using vanilla JS
displayTotal();

// store fucntion to call a callback function after the state is updated. This call displayTotal again
store.subscribe(displayTotal);

// JS event that allows the user dispatch an action via the GUI
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
