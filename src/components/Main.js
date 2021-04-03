import React, { Component } from 'react';
import './Main.css';
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import Tracker from './Tracker/Tracker';
import Spinner from '../assets/loader.gif';



export default class Main extends Component {

  state = {
    user: 1,
    loading: true,
    formSwitcher: false
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }else{
        this.setState({user: null});
      }
    });
  }

  formSwitcher = (action) => {
    console.log(action);
    this.setState({
      formSwitcher: action === 'register' ? true : false
    })
  }

  render(){

    const form = !this.state.formSwitcher ? <Login /> : <Register />;

    if(this.state.user === 1){
      return (
        <div className="mainBlock">
          <img src={Spinner} alt="Spinner" className="ImgSpinner" />
        </div>
      )
    }

    return(
    <>
        {!this.state.user ? 
          (<div className="mainBlock">
          {form}
      {!this.state.formSwitcher ?

        (<span className="underLine">
          Was niet geregistreeerd?
          <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} className="linkBtn">Maak een account</button>
        </span>) : (
          <span className="underLine">
          Heb je al een account?
          <button onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} className="linkBtn">Meld je aan</button>
        </span>
        )
        }
      </div>) : (
        <Tracker />
      )
      }
    </>);
  }
}