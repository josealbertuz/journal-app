import { ImagePlaceholder } from "../components/notes/ImagePlaceholder";
import { ImageItemGrid } from "../components/notes/ImageItemGrid";

export const imagesFilter = (images = [], boxSize = 100) => {
    const imagesLength = images.length;

    return [
        ...images.slice(0, 3).map((image, index) =>
            <ImageItemGrid
                key={index}
                src={image}
                boxSize={boxSize}
                />),
        <ImagePlaceholder
         key={4}
         remainedImages={(imagesLength - 3)} />

    ];

}