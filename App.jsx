import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
      return (
        <p>Hiiiiiiiiii!</p>
      );
    }
  };
  const app = new App();
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(app);

  export default App;