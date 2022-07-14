import React, { Component } from 'react';
import { FormContainer, Input, Button, Title, Container } from "./Form.styled";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Form extends Component {

    state = {
        pokemonName: ""
    }

    handleNameChange = (e) => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.pokemonName.trim() === ""){
            toast.warn("Write the name of pokemon!", {
                position: toast.POSITION.TOP_RIGHT
            })
            return;
        }
        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: "" });
    }

    render() {
        const { pokemonName } = this.state;
        return (
            <FormContainer onSubmit={ this.handleSubmit }>
                <Title> Find your favorite character! </Title>
                <Container>
                    <Input 
                        name="pokemonName"
                        value={ pokemonName }
                        onChange={ this.handleNameChange }
                        type="text" 
                    />
                    <Button type="submit">
                        Search
                    </Button>
                </Container>
                
            </FormContainer>
        );
    }
}

export default Form;