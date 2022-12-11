import styled from "styled-components";

export const SFormContainer = styled.form`
    width: 600px;
    margin: 0px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 18px #e8e8e8;
    border-radius: 5px;
    background-color: #fff;
`;

export const STitle = styled.p`
    font-size: 34px;
    font-weight: 600;
    margin: 10px 0 30px 0;
    color: #f3902a;
    text-shadow: 0px 1px 3px white;
`;

export const SContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SInput = styled.input`
    border: 1px solid #e8e8e8;
    width: 250px;
    padding: 10px 15px;
    outline: none;
    border-radius: 5px 0 0 5px ;
    box-shadow: 0px 1px 2px #e8e8e8;
    cursor: pointer;
`;

export const SButton = styled.button`
    padding: 11px 15px;
    border-radius: 0 5px 5px 0;
    font-weight: 600;
    color: #fff;
    text-shadow: 0px 1px 2px black;
    box-shadow: 0px 1px 2px #e8e8e8;
    background-color: #fce043;
    background-image: linear-gradient(315deg, #fce043 0%, #fb7ba2 74%);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.07);
    }
`;