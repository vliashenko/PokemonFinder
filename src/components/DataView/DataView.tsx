import React, { FC } from 'react';
import { SContainer, SImage, SSkillList, SSkillItem } from "./DataView.styled";
import { IDataViewProps } from './types'

const DataView: FC<IDataViewProps> = ({ pokemon, background, children }) => {

    const { stats, sprites } = pokemon;

    return (
        <>
            {children}
            <SContainer background={background}>
                <SImage src={sprites?.other["official-artwork"].front_default} alt="pokemon" />
                <SSkillList>
                    {stats?.map((entry: any) => {
                        return (
                            <SSkillItem
                                key={entry.stat.name}
                            >
                                {entry.stat.name} : {entry.base_stat}
                            </SSkillItem>
                        )
                    })}
                </SSkillList>
            </SContainer>
        </>
    );
};

export default DataView;