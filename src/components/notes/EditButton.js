import React from 'react';
import styled from 'styled-components';
import { Button } from '@chakra-ui/button';
import { Edit } from '@material-ui/icons';

const Container = styled.div`
    position: absolute;
    display: ${({hide}) => hide ? 'none' : 'flex'};
    justify-content: center;
    width: 100vw;
    bottom: 5%;
    top: auto;
    left: 0;
`;

export const EditButton = ({hide = false}) => {

    return (
        <Container hide={hide} >
            <Button
                borderRadius="3xl"
                colorScheme="blue"
                type="submit"
                leftIcon={<Edit />}
            >Edit</Button>
        </Container>
    )
}
