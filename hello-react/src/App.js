import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
const App = () => {
  return (
    <>
      <MyComponent name={32}> 아머닝</MyComponent>
      <Counter />
      <Say />
    </>
  );
};

export default App;
