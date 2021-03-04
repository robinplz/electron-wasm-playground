import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { readFileAsync } from './core-interface';

// We find our app DOM element as before
const root = document.getElementById('root');

// You can see how we can mix html and nested components together
class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Click it</h1>

        <button onClick={() => {
          const path = "/Users/robin/tmp/package.json";

          readFileAsync(path).then((ret: number) => {alert(ret)});
          
        }}>
          Test
        </button>

      </div>
    );
  }

}

// Finally, we render our top-level component to the actual DOM.
ReactDOM.render(<App />, root);