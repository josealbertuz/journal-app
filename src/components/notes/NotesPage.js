import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
`;

export const NotesPage = () => {
    return (
        <Wrapper>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
            <h1>Notes page</h1>
        </Wrapper>
    )
}
