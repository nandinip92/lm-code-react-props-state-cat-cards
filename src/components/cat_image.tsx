interface CatImageProps {
  image: string;
  altText: string;
}

const CatImage: React.FC<CatImageProps> = ({ image, altText }) => (
  <>
    <img className="card__image" src={image} alt={altText} />
  </>
);

export default CatImage;
