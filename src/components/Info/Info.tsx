import React, { FC, useState, useEffect } from 'react';
import ErrorView from '../ErrorView/ErrorView';
import DataView from '../DataView/DataView';
import PendingView from '../PendingView/PendingView';
import { fetchPokemonAPI } from "../../services/fetchpokemonAPI";
import { SContainer, STitle } from "./Info.styled";
import {bck, bck1, bck2} from "../DataView/img";
import { IPokemon, IInfoProps } from './types';

const Info: FC<IInfoProps> = ({ pokemonName }) => {

    const [pokemon, setPokemon] = useState<IPokemon | any>(null);
    const [error, setError] = useState<any | null>(null);
    const [status, setStatus] = useState<string>("idle");
    const [background, _] = useState<string[]>([ bck, bck1, bck2 ])

    useEffect(() => {
        if (!pokemonName.length) return;
        setStatus("pending");
        fetchPokemonAPI(pokemonName)
            .then(pokemon => { 
                setPokemon(pokemon);
                setStatus('resolved')
            })
            .catch(error => {
                setError(error);
                setStatus("rejected")
            })
            
    },[pokemonName]);

    const generateRandomIndex = (max: number) => {
        return Math.floor(Math.random() * max) ;
    };
    
    const normalName = pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1);
    const randomIndex = generateRandomIndex(background.length);
    
    if(status === "resolved") {
        return (
            <SContainer>
                <DataView pokemon={pokemon} background={background[randomIndex]}>
                    <STitle> { normalName } </STitle>
                </DataView>
            </SContainer>
        );
    };
    
    if(status === "pending") {
        return (
            <SContainer>
                <PendingView/>
            </SContainer>
        );
    };

    if(status === "rejected") {
        return (
            <SContainer>
                <ErrorView>
                    <STitle> { error?.message } </STitle>
                </ErrorView>
            </SContainer>
        );
    };
    
    
    return (
        <SContainer>
            <STitle> Write a pokemon name! </STitle>
        </SContainer>
    );
}

export default Info; 