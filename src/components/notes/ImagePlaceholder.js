import React from 'react';
import { Flex } from '@chakra-ui/layout';

export const ImagePlaceholder = ({ remainedImages }) => {
    return (
        <Flex
            w="100px"
            h="100px"
            justify="center"
            alignItems="center"
            bg="gray.400"
            opacity={0.5}
            marginY={2}
        >
            +{remainedImages}
        </Flex>
    );
}
