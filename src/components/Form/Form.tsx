import React, { FC, useState } from 'react';
import { SFormContainer, SInput, SButton, STitle, SContainer } from "./Form.styled";
import { toast } from "react-toastify";
import { IFormProps } from './types';
import 'react-toastify/dist/ReactToastify.css';

const Form: FC<IFormProps> = ({ onSubmit }) => {

    const [pokemonName, setPokemonName] = useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { currentTarget: { value } } = e;
        setPokemonName(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(pokemonName.trim() === ""){
            toast.warn("Write the name of pokemon!", {
                position: toast.POSITION.TOP_RIGHT
            })
            return;
        }
        onSubmit(pokemonName);
    };

    return (
        <SFormContainer onSubmit={ handleSubmit }>
        <STitle> Find your favorite character! </STitle>
        <SContainer>
            <SInput 
                name="pokemonName"
                value={ pokemonName }
                onChange={ handleNameChange }
                type="text" 
            />
            <SButton type="submit">
                Search
            </SButton>
        </SContainer>
        
    </SFormContainer>
    );  
};

export default Form;