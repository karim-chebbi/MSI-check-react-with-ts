import React from "react";

// Step 1: Define the props type
interface GreetingProps {
  name: string; // We expect a string for the 'name' prop
}

// Step 2: Apply the type to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

//////////////////////////////////////////////
//////////////////////////////////////////////
import React, { Component } from "react";

// Step 1: Define props and state interfaces
interface CounterProps {} // No props currently used
interface CounterState {
  count: number;
}

// Step 2: Extend the class with typed props and state
class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    // Step 3: Initialize state inside the constructor
    this.state = {
      count: 0,
    };
  }

  // Step 4: Define the increment method (arrow function keeps `this` context)
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
