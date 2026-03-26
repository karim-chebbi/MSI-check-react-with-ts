# React JavaScript to TypeScript Conversion 🚀

## 📌 Project Overview

This project demonstrates how to convert basic **React components written in JavaScript** into **TypeScript**.

The goal is to understand:

* How to add **type safety** in React
* How to define **Props and State interfaces**
* How to work with both **Functional** and **Class Components** in TypeScript

---

## 🧠 Learning Objectives

By completing this checkpoint, you will learn:

* ✅ How to convert a functional component to TypeScript
* ✅ How to type component props using interfaces
* ✅ How to convert class components with state
* ✅ How to type `setState` and class methods
* ✅ Best practices for clean and maintainable TypeScript code

---

## 📂 Project Structure

```
/src
 ├── Greeting.tsx
 ├── Counter.tsx
 └── README.md
```

---

## 🔄 Conversion Steps

### 🔹 1. Convert Functional Component (Greeting)

#### ✅ Original JavaScript Code

```jsx
import React from 'react'; 

const Greeting = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

#### ✅ TypeScript Version (Step-by-step)

```tsx
import React from 'react';

// Step 1: Define the props type
interface GreetingProps {
  name: string; // We expect a string for the 'name' prop
}

// Step 2: Apply the type to the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
```

#### 💡 Explanation

* We created an **interface** `GreetingProps` to define expected props.
* We used `React.FC` to type the functional component.
* This ensures **type safety** when passing props.

---

### 🔹 2. Convert Class Component (Counter)

#### ✅ Original JavaScript Code

```jsx
import React, { Component } from 'react'; 

class Counter extends Component { 
  state = {
    count: 0
  };

  increment = () => {
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
```

---

#### ✅ TypeScript Version (Step-by-step)

```tsx
import React, { Component } from 'react';

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
      count: 0
    };
  }

  // Step 4: Define the increment method
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
```

---

#### 💡 Explanation

* Created `CounterState` to type the state.
* Created `CounterProps` (even if empty for now).
* Extended `Component<Props, State>` for full typing.
* Typed the method `increment` with `(): void`.
* Ensured `this.state.count` is always a **number**.

---

## ⚙️ How to Run the Project

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

---

## 🧩 Key Takeaways

* TypeScript helps prevent runtime errors by catching issues early.
* Interfaces make your components more predictable and maintainable.
* Always type:

  * Props
  * State
  * Functions

---

## 📚 Bonus Tips

* Prefer **interfaces** for object shapes.
* Use **arrow functions** in class components to avoid binding issues.
* Keep your code **clean and well-commented**.

---

## 👨‍💻 Author

**Karim Chebbi**
Full-stack developer & instructor (React, Node.js, TypeScript)

---

## ⭐ Support

If you found this helpful, feel free to ⭐ the repo!
