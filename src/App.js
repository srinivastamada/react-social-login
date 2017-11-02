import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';

class App extends Component {

  constructor(){
    super();
    this.state={
      appName: "Login with Facebook and Google using ReactJS and RESTful APIs",
      home: false
    }
  }

  render() {
    return (
      <div>
          <Routes name={this.state.appName}/>
      </div>
    );
  }
}
export default App;