import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

export const StyledCard = styled(Card)`
    width: ${(props) => (props.isResult ? "300px" : "150px")};
    height: ${(props) => (props.isResult ? "300px" : "150px")};
    background-color: ${(props) => props.bgColor1};
    border: none;
    border-radius: 10px;
    margin: 0 5px 5px 0;
    
    .thumb {
        background-color: ${(props) => props.bgColor2};
        
        padding: 15px;
        width: 30px;
        height: 30px
        border: none;
        border-radius: 25px;
    }

    .images {
        position: relative;
    }
    .return {
        position: absolute;

        right: 260px;
        top: 100px;
        background-color: #227B9F;

        width: 30px;
        padding: 10px;
        border-radius: 25px;
    }

    h4 {
        color: #fff;
        margin: 0;
        font-size: 20px;
    }

    .msg {
        color: #fff;
        font-size: 10px;
    }

    .seu-imc {
        color: #fff;
        font-size: 14px;
        margin-bottom: 40px;
    }
`;
