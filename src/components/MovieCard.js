import React from "react";
import PropTypes from 'prop-types'
import { Wrapper, Title, Description } from "./StyledBlock";

export default function MovieCard(props) {
    return (
    <Wrapper>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
    </Wrapper>
    )
} 


MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

MovieCard.defaultProps = {
    title: '(The Movie) ',
    description: '(This is a movie about .... )'
}
