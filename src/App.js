import React from 'react';
import { hot } from 'react-hot-loader/root';

// Components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="app">
        Hai
      </div>
    );
  }
}

export default hot(App);
