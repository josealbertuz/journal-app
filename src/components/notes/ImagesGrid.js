import React from 'react';
import styled from 'styled-components';
import { imagesFilter } from '../../utils/images-filter';
import { ImageItemGrid } from './ImageItemGrid';

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: 100%;
`;


export const ImagesGrid = ({ images = [], filter = false, boxSize = 100 }) => {

    if (filter) {

        images = imagesFilter(images);

    } else {
        images = images.map((image, index) =>
            <ImageItemGrid
                key={index}
                src={image}
                boxSize={boxSize}
            />
        );
    }

    return (
        <Grid>
            {
                images
            }
        </Grid>
    )
}
