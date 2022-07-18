import React from "react";
import styled from "styled-components";


export const Wrapper = styled.section`
    padding: 3em;
    background: papayawhip;
`;

export const Title = styled.h3`
    font-size: 2em;
    text-align: center;
    color: palevioletred;
`;

export const Description = styled.h3`
    font-size: 2em;
    text-align: center;
    color: grey;
`;


function StyledBlock(props) {
    return (
        <div>
            <Wrapper>
                <Title>{props.title}</Title>
                <Title>{props.description}</Title>
            </Wrapper> 
        </div>
    )
}

export default StyledBlock
