import React, { FC } from 'react';
import { SContainer, SImage } from "./ErrorView.styled";
import { IErrorViewProps } from './types';
import sadcat from './img/errorView.jpg';

const ErrorView: FC<IErrorViewProps> = ({ children }) => {
    return (
        <SContainer>
            {children}
            <SImage src={sadcat} alt="sadcat"/>
        </SContainer>
    );
};

export default ErrorView;