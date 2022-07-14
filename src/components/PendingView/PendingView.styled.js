import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    margin-left: 10px;
    font-size: 24px;
`;

const animation = keyframes`
    0% {
        transform: rotate( 0deg );
    }
    100% {
        transform: rotate( 359deg );
    }
`;

export const IconContainer = styled.div`
    animation: ${animation} 2s infinite linear;
`;