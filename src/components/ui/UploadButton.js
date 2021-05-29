import { Button } from '@chakra-ui/button';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';

export const UploadButton = ({ handleFiles = () => {} }) => {

    const inputFile = useRef(null);

    return (
        <>
            <input 
                type="file" 
                ref={inputFile} 
                style={{ display : 'none' }}
                onChange={ handleFiles }
                multiple="multiple"
            />
            <Button
                leftIcon={ <FontAwesomeIcon icon={ faImage } /> }
                onClick={ () => inputFile.current.click() }
            >
                Upload images
            </Button>
        </>
    )
}
