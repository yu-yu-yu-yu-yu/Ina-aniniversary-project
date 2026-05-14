import React from "react";
import styled from "styled-components";

const TakoLoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const TakoLoadingAnimation = styled.img<{ $fullPage?: boolean }>`
    width: ${({ $fullPage }) => ($fullPage ? "300px" : "150px")};
`;

export const TakoLoading = ({ fullPage }: { fullPage?: boolean }): JSX.Element => {
    const img = (
        <TakoLoadingAnimation
            $fullPage={fullPage}
            alt={`tako-loading-gif`}
            src={`${process.env.PUBLIC_URL}/takoJiggleProject.gif`}
        />
    );

    return fullPage ? <TakoLoadingWrapper>{img}</TakoLoadingWrapper> : img;
};