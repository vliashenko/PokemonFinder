import React from 'react';
import { ImSpinner } from "react-icons/im"
import { Container, IconContainer, Text } from "./PendingView.styled";


const PendingView = () => {
    return (
        <Container role="alert">
            <IconContainer>
                <ImSpinner size="32"/>
            </IconContainer>
            <Text> Loading... </Text>
        </Container>
    );
};

export default PendingView;