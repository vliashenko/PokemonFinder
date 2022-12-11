import React, { FC, useState } from 'react';
import Form from './components/Form/Form';
import Info from './components/Info/Info';
import { SLayout } from 'App.styled';
import { ToastContainer } from "react-toastify";

const App: FC = () => {

  const [pokemonName, setPokemonName] = useState<string>("");

  const handleFormSubmit = (pokemonName: string) => {
    setPokemonName(pokemonName)
  };

  return (
    <SLayout>
      <Form onSubmit={ handleFormSubmit }/>
      <Info pokemonName={ pokemonName }/>
      <ToastContainer
        autoClose={3000}
      />
    </SLayout>
  );
}

export default App; 