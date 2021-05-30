import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { IconButton } from '@chakra-ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@chakra-ui/layout';

export const ImageItemGrid = ({ boxSize = 100, src }) => {

    const [showDeleteButton, setshowDeleteButton] = useState(false)

    return (
        <Box
            position="relative"
        >
            <Image
                onMouseLeave={ () => setshowDeleteButton(false) }
                onMouseOver={ () => setshowDeleteButton(true) }
                boxSize={boxSize}
                objectFit="cover"
                src={src}

            />
            <IconButton
                display={ !showDeleteButton && 'none' }
                position="absolute"
                top="2%"
                right="1%"
                bottom="auto"
                icon={<FontAwesomeIcon icon={faTimesCircle} />}
            />
        </Box>
    )
}


