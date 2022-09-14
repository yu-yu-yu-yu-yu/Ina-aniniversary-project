import React from "react";
import styled from "styled-components";

const TakoImg = styled.img`
    width: 75px;
    margin-right: 10px;
    filter: drop-shadow(2px 2px 1px darkgray);
    opacity: 1;
`;


interface TakoIconProps {
    id: string
}

export const TakoIcon = ({ id }: TakoIconProps): JSX.Element => {
    const useRandom = !id
    const images = ['8-bit Tako.png', 'Hollow Tako.png', 'Ikadachi.png', 'Mori Tako.png', 'Robodachi.png', 'Tako Amelia (Takoson).png',
    'Tako Gura (Chum Tako).png', 'Tako Ina.png', 'Tako Kiara (Tako Bell).png', 'Tako Ross.png', 'Takodachi.png', 'Takomfy.png', 'Tophat Tako.png',
    'Violet Tako.png', 'Wonder Tako.png', 'Yuul B. Tako.png']
    const imgurl =  useRandom ? `${process.env.PUBLIC_URL}/icon/${images[Math.floor(Math.random()*images.length)]}` : `${process.env.PUBLIC_URL}/takos/${id}`
    return (
            <TakoImg
                alt={`tako-icon-${id}`}
                src={imgurl}
            />
    )
};
