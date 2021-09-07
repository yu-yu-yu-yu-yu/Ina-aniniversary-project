import React, { useState } from 'react';
import styled from "styled-components";
// import {FaAr} from 'react-icons/fa';


const ScrollBtn = styled.button`

    display: none;
    background: var(--ika-purple) 0% 0% no-repeat padding-box;
    position: fixed;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    z-index: 500;
    border-radius: 50%;
    align-items: center;
    justify-content: center;    
    border: 0px;

    font-size: 2.5em;
    height: 80px;
    width: 80px;  

    @media only screen and (max-width: 768px) {
        font-size: 2em;
        height: 60px;
        width: 60px;      
    }
`;

const ScrollArrow = () => {

    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <ScrollBtn onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} >
            <i className="fa fa-arrow-up" aria-hidden="true" style={{ color: 'white' }}></i>
        </ScrollBtn>
    );
}

export default ScrollArrow;