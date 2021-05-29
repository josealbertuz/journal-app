import styled from "styled-components";

export const Image = styled.img`
    max-width: ${ props => props.width }px;
    max-height: ${ props => props.height }px;
    margin: 5px 0;
`;