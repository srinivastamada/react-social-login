import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
class Home extends Component {

  constructor(props){
   super(props);
   this.state = {
   name:'',
   redirect: false,
   products:[],
   pid:''
   };
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    console.log(data);
    
    this.setState({name: data.userData.name})
  }

  render() {

    if(!sessionStorage.getItem('userData') || this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

    if(this.state.pid > 0){
      return (<Redirect to={'/checkout'}/>)
    }

    return (
      <div >
      Welcome {this.state.name}
      </div>
    );
  }
}

export default Home;