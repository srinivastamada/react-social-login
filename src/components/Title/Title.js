import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Title.css';

class Title extends Component {
  
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false
    }
  }

  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirect: true});

  }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/'}/>)
    }
    return (
      <div className="row">
      <div className="medium-12 columns">
      <ul className='right'><li><a href="/orders"  >Orders</a></li>
      <li><a href="#" onClick={this.logout} >Logout</a></li>
      </ul>
      <h2>Welcome {this.props.name}</h2>
      </div>
      </div>
    );
  }
}

export default Title;