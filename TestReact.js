import { createRoot } from './React Full Files/react-dom/client';
import React from "react";


function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);


//ReactDOM.render(<h1>Hello World</h1>, document.getElementById("app"));


//export default NavigationBar
// rfce