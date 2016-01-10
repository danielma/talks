import React from "react";
import { render } from "react-dom";

// import your presentations here
// import MyCoolPresentation from 'my-cool-presentation'

function MissingPresentation() {
  return (
    <h1>No presentation found. Sorry!</h1>
  )
}

const Presentation = () => {
  switch(window.location.pathname) {
    // case "/cool-presentation":
    //   return MyCoolPresentation
    default:
      return MissingPresentation
  }
}()

render(<Presentation/>, document.getElementById("root"));
