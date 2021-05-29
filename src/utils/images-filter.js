import { ImagePlaceholder } from "../components/notes/ImagePlaceholder";
import { Image } from "../components/notes/Image";

export const imagesFilter = (images = [], height = 100, width = 100) => {
    const imagesLength = images.length;

    return [
        ...images.slice(0, 3).map((image, index) =>
            <Image
                key={index}
                src={image}
                alt=""
                height={ height }
                width={ width }
                />),
        <ImagePlaceholder
         key={4}
         remainedImages={(imagesLength - 3)} />

    ];

}