import React from 'react';
import styled from 'styled-components';
import { imagesFilter } from '../../utils/images-filter';
import { Image } from '../notes/Image';

const Grid = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;


export const ImagesGrid = ({ images = [], filter = false, imageHeight = 100, imageWidth = 100 }) => {

    if (filter) {

        images = imagesFilter(images);

    } else {
        images = images.map((image, index) =>
            <Image
                key={index}
                src={image}
                alt=""
                height={imageHeight}
                width={imageWidth}
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
