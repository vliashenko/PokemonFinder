import React, { Component } from 'react';
import Form from './components/Form/Form';
import Info from './components/Info/Info';
import { ToastContainer } from "react-toastify";

class App extends Component {

  state = {
    pokemonName: ""
  };
  
  handleFormSubmit = ( pokemonName ) => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <>
        <Form onSubmit={ this.handleFormSubmit }/>
        <Info pokemonName={ pokemonName }/>
        <ToastContainer
          autoClose={3000}
        />
      </>
    );
  };
};

export default App; 