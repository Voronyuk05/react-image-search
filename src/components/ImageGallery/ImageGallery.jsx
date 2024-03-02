import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import '../../GlobalSyles.css'

export const ImageGallery = ({images, onChangeCurrentImg}) => {
    return (
        <ul className="gallery">
            {images && images.map(({id ,largeImageURL, webformatURL}) => (
                <ImageGalleryItem
                key={id}
                id={id}
                largeImageURL={largeImageURL}
                webformatURL={webformatURL}
                onChangeCurrentImg={onChangeCurrentImg}
                />
            ))}
        </ul>
    )
}