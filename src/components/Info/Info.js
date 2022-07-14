import React, { Component } from 'react';
import ErrorView from '../ErrorView/ErrorView';
import DataView from '../DataView/DataView';
import PendingView from '../PendingView/PendingView';
import { fetchPokemonAPI } from "../../services/fetchpokemonAPI";
import { Container, Title } from "./Info.styled";
import bck from "../DataView/img/backgroundCard.jpg";
import bck1 from "../DataView/img/backgroundCard1.jpg";
import bck2 from "../DataView/img/backgroundCard2.jpg";

class Info extends Component {

    state = {
        pokemon: null,
        error: null,
        status: "idle",
        background: [ bck, bck1, bck2 ]
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if(prevName !== nextName){
            this.setState({ status: "pending" })
            setTimeout(() => {
                fetchPokemonAPI(nextName)
                    .then(pokemon => this.setState({ pokemon, status: "resolved" }))
                    .catch(error => this.setState({ error, status: "rejected" }))
                },1000)
            }
    }

    generateRandomIndex = (max) => {
        return Math.floor(Math.random() * max) ;
    }

    render() {
        const { pokemon, error, status, background } = this.state;
        const normalName = pokemon && pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1);
        const randomIndex = this.generateRandomIndex(background.length);

        if(status === "idle") {
            return (
                <Container>
                    <Title> Write a pokemon name! </Title>
                </Container>
            );
        };

        if(status === "pending") {
            return (
                <Container>
                    <PendingView/>
                </Container>
            );
        };

        if(status === "rejected") {
            return (
                <Container>
                    <ErrorView>
                        <Title> { error.message } </Title>
                    </ErrorView>
                </Container>
            );
        };

        if(status === "resolved") {
            return (
                <Container>
                    <DataView pokemon={pokemon} background={background[randomIndex]}>
                        <Title> { normalName } </Title>
                    </DataView>
                </Container>
            );
        };
    }
}

export default Info; 