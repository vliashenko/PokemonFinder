import React from 'react';
import { Container, Image } from "./ErrorView.styled";
import sadcat from "./img/errorView.jpg";

const ErrorView = ({ children }) => {
    return (
        <Container>
            {children}
            <Image src={sadcat} alt="sadcat"/>
        </Container>
    );
};

export default ErrorView;