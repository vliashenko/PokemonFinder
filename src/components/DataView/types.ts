import { IPokemon } from "components/Info/types";

export interface IDataViewProps {
   pokemon: IPokemon;
   background: string;
   children: React.ReactNode;
}

export interface IDataStyled {
    background: string;
}