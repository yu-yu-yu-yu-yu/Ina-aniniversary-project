import React from "react";
import styled from "styled-components";

const TakoLoadingAnimation = styled.img`
    width: 150px;
`;

export const TakoLoading = (): JSX.Element => {

    return (
        
            <TakoLoadingAnimation
                alt={`tako-loading-gif`}
                src={`${process.env.PUBLIC_URL}/takoJiggleProject.gif`}
            />
        
    )
};