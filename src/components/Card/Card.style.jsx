import React from 'react';
import styled from 'styled-components';

import { Card } from "./Card";

export const StyledCard = styled(Card)`
    width: 150px;
    height: 150px;
    background-color: ${props => props.bgColor1};
    border: none;
    border-radius: 10px;
    
    .thumb {
        background-color: ${props => props.bgColor2};
        
        transform: ${props => props.thumbUp ? "rotateY(0deg)": "rotateX(180deg)"};
        
        padding: 15px;
        width: 30px;
        height: 30px
        border: none;
        border-radius: 25px;
    }

    h4 {
        color: #fff;
        margin: 0;
        font-size: 20px;
    }

    p {
        color: #fff;
        font-size: 10px;
    }
`;


