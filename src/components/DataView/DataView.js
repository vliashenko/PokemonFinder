import React from 'react';
import { Container, Image, SkillList, SkillItem } from "./DataView.styled";

const DataView = ({ pokemon: { sprites, stats }, background, children }) => {
    return (
        <>
            {children}
                <Container background={ background }>
                    <Image src={ sprites.other["official-artwork"].front_default } alt="pokemon"/>
                    <SkillList>
                        { stats.map( entry => {
                            return (
                                <SkillItem 
                                    key={ entry.stat.name }
                                >
                                    { entry.stat.name } : { entry.base_stat }
                                </SkillItem>
                            )
                        }) }
                    </SkillList>
                </Container>
        </>
    );
};

export default DataView;