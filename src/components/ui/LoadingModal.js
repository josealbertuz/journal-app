import { CircularProgress } from '@chakra-ui/progress';
import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    display: ${({ show }) => show ? 'flex' : 'none'};
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
`;

export const LoadingModal = ({ show = false }) => {
    return (
        <Modal show={show}>
            <CircularProgress
                overflow="hidden"
                isIndeterminate />
        </Modal>
    )
}
