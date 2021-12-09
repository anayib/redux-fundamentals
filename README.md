# Fundamentos de Redux

Este repositorio te servirá como guía de estudio para aprender las bases de Redux.


## Simple Redux Counter
Location: `./simple-redux-counter`
Open the `index.js` file. When typing the arrow up in your keyboard you will add one and viceversa.
This is a simple implementation of Redux to handle the state of a counter using plain JS to manipulate the DOM. It does not use React neither react-redux library.

## React Redux Counter
This example is the same as the previous one but I update the `h1` DOM element content with React not using vanilla JS as in the previous example. Im including react, react-dom, redux, react-redux and babel in the `index.js` file to have access to all the dependencies we need.

To run the code you need to run a server to avoid CORS violation. TO do this isntall `http-server` by running `npm install -g http-server` and then run `http-server -c-1` from your `./react-redux-counter-example`, this will start a node server to run the code.

| Remember that Reducer functions - the ones modifying the state of a component - have to be pure functions, meaning they cannot mutate the parameters they receive and should always return the same value given the same parameters. To avoid mutation always return a new object from a Reducer function.
