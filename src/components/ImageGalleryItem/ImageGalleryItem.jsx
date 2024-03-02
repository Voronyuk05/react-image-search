import '../../GlobalSyles.css'
export const ImageGalleryItem = ({id ,largeImageURL, webformatURL, onChangeCurrentImg}) => {
    return (
        <li className="gallery-item" id={id}>
            <img className="gallery-item-img" src={webformatURL} alt="" onClick={() => onChangeCurrentImg(largeImageURL)}/>
        </li>
    )
}