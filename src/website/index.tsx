import * as React from 'react';
import * as ReactDOM from 'react-dom';

// We find our app DOM element as before
const root = document.getElementById('root');

// Here's an example of a couple of simple React components
const Emphasis: React.FunctionComponent = props => <em>{props.children}</em>;

// You can see how we can mix html and nested components together
const App = () => (
  <div>
    Hello, <Emphasis>world</Emphasis>
  </div>
);

// Finally, we render our top-level component to the actual DOM.
ReactDOM.render(<App />, root);