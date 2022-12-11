import React, { FC } from 'react';
import { ImSpinner } from "react-icons/im"
import { SContainer, SIconContainer, SText } from "./PendingView.styled";


const PendingView: FC = () => {
    return (
        <SContainer role="alert">
            <SIconContainer>
                <ImSpinner size="32"/>
            </SIconContainer>
            <SText> Loading... </SText>
        </SContainer>
    );
};

export default PendingView;