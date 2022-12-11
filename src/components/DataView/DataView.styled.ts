import styled from "styled-components";
import { IDataStyled } from './types'

export const SContainer = styled.div<IDataStyled>`
    width: 390px;
    padding: 15px 22px;
    margin: 20px 0;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 18px black;

    background: url(${props => props.background && props.background});
    background-size: cover;
`;

export const SImage = styled.img`
    width: 240px;
    height: auto;
`;

export const SSkillList = styled.ul`
    width: 340px;
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(0,0,0,0.4);
`;

export const SSkillItem = styled.li`
    margin: 10px 0;
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-shadow: 0px 1px 4px black;
`;