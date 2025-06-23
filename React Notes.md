# React Notes
## Index

- [Why React?](#why-react)
- [Getting Started](#getting-started)
- [Components](#components)
- [Modules](#modules)
- [Class-Based vs Function-Based Components](#class-based-vs-function-based-components)
- [State](#state)
- [Function-Based Components](#function-based-components)
- [JSX (JavaScript XML)](#jsx-javascript-xml)
    - [React Fragments](#react-fragments)
- [Hooks](#hooks)
    - [Common Hooks](#common-hooks)
- [Props (Properties)](#props-properties)



## Why React?

- **Fast Applications:** React enables fast, single-page applications (SPAs) that use only one HTML page to build the entire app.
- **Examples:** Instagram, Facebook, GitHub, Flipkart.
- **Component-Based Architecture:** React organizes UI into reusable components.

## Getting Started

- **Create a new project with Vite:**
    - Latest version:  
        ```bash
        npm create vite@latest
        ```
    - Specific version:  
        ```bash
        npm create vite@[version]
        # Example: npm create vite@18.00.00
        ```

---

## Components

1. A component is a reusable block of code that performs a specific task. It can be a function or a class.
2. Component names should always start with an uppercase letter.
3. Components return JSX, which is rendered to the caller.
4. Multiple components can exist in a single module, but it's recommended to have only one per module.
5. Be careful when naming modules.
6. **Types of Components:**
     - **Function-Based Component (FBC)**
     - **Class-Based Component (CBC)**

---

## Modules

1. A module is a single `.js` or `.jsx` file.
2. A JS or JSX file becomes a module when `type="module"` is specified.
3. Import and export are possible only between modules.
4. In React, modules use `.js` or `.jsx` extensions.
5. Multiple components can be defined in one module.

---

## Class-Based vs Function-Based Components

| Class-Based Component (CBC) | Function-Based Component (FBC) |
|-----------------------------|-------------------------------|
| Uses classes                | Uses functions                |
| Extends `Component` from React and must have a `render` method | Does not extend `Component` and no need for a `render` method |
| Has built-in state object and `setState()` method | No built-in state; use state management like Redux, Toolkit, or Hooks (`useState`, `useReducer`) |
| No Hooks support            | Supports Hooks (`useState`, `useReducer`, `useParams`, `useCallback`) |
| Has lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) | No built-in lifecycle methods, but can use `useEffect` Hook |
| Difficult to maintain       | Easy to maintain              |

---

## State

- Any update operation is possible only through state.
- **Note:** If you change the state, the whole component re-renders.

---

## Function-Based Components

- `{}` is called a JSX Expression.

---

## JSX (JavaScript XML)

**Rules:**

1. Return only one JSX element (can have nested elements). Wrap all JSX in a single container.
2. JSX element names are lowercase (uppercase is considered a component).
3. Use elements for their intended purpose (e.g., `<div>` should not be inside `<p>`).
4. All JSX elements must be closed, paired or unpaired (`<br />`).
5. Some HTML attributes have alternative names in JSX:
     - `class` → `className`
     - `for` → `htmlFor`
6. Use JSX expressions `{}` to write JavaScript code inside JSX.
7. Only ternary operators are allowed for conditional statements in JSX expressions (use `if-else` inside functions).
8. Only higher-order functions (HOFs) that return values (like `map`, `filter`, `reduce`) can be used for looping in JSX. Traditional loops (`for`, `while`, `do-while`) are not allowed. `forEach` is not recommended as it does not return anything.

---

### React Fragments

- Use fragments to avoid extra nodes in the DOM tree.
    - Empty fragment: `<></>` (when no key attribute is needed)
    - Named fragment: `<React.Fragment>` (when key or other attributes are needed)
    - Import fragment:  
        ```js
        import { Fragment } from 'react';
        ```

---

## Hooks

- Hooks are built-in functions (Special Function) provided by React.
- They allow function-based components to use state and other React features(State, Life Cycle) .

**What is State**
- State is way to store data that can be change change
- if you do nay chnage in state whole component is rerender

**Why Hooks?**
- Before Hooks, only class components could use features like state and lifecycle methods.
- Hooks allow function-based components to use these features, making code simpler and more reusable.

### Common Hooks

- `useState`
- `useEffect`
- `useReducer`
- `useCallback`
- `useParams`

---
## useState()
useState in built in hook in react that allow you to create and manage the state

syntax : ``` let [state, useState] = useState('pass initial value') ```


## Props (Properties)

- Props are objects.
- Props are passed from parent to child components.
- Any type of data can be passed as key-value pairs.

**Default Props:**  
Default props are values a component uses if no value is passed from the parent. They help prevent `undefined` errors and define fallback behavior.


### Difference Between Props and State

### Props vs State

| Feature      | Props                                                                 | State                                                      |
|--------------|-----------------------------------------------------------------------|------------------------------------------------------------|
| Definition   | Read-only values passed from parent to child components               | Local, mutable data managed within a component             |
| Usage        | Used to pass data between components                                  | Used to manage dynamic data within a component             |
| Modifiable?  | ❌ Cannot be modified by the child component                          | ✅ Can be updated using `setState()` or `useState()`        |
| Control      | Controlled by the parent component                                    | Controlled by the component itself                         |
| Lifecycle    | Static during component's lifetime (unless parent sends new props)    | Can change over time (triggers re-render)                  |
| Example      | `<Profile name="Jabbar" />`                                           | `const [count, setCount] = useState(0)`                    |
| Re-render    | Triggers re-render if changed by parent                               | Triggers re-render when updated                            |
| Purpose      | Makes components reusable and dynamic                                 | Makes components interactive and responsive                |


---

## Q&A

**Q1: What is the difference between state and props?**  
A: Props are passed from parent to child and are read-only. State is managed within the component and can be changed.

**Q2: Why use Hooks in React?**  
A: Hooks allow function components to use state and lifecycle features, making code simpler and more reusable.

**Q3: What is JSX?**  
A: JSX is a syntax extension for JavaScript that lets you write HTML-like code in React components.

**Q4: How do you create a component in React?**  
A: By defining a function or class that returns JSX.

**Q5: What is a React Fragment?**  
A: A way to group multiple elements without adding extra nodes to the DOM.

**Q5: What is a Bubbling Phase?**  
**Q5: What is a Capturing Phase?**  
**Q5: What is a Event Deligation?**  
**Q5: What is a Event Propagation?**  