import ImageInterface from "../data/image-interface";
interface ImageProps {
  animalImage: ImageInterface | undefined;
}

const AnimalImage: React.FC<ImageProps> = ({ animalImage }) => {
  const image = animalImage?.image;
  const altText = animalImage?.altText;
  const licenceUrl = animalImage?.licenceUrl;
  const licenceType = animalImage?.licenceType;
  const attributionName = animalImage?.attributionName;
  const attributionUrl = animalImage?.attributionUrl;

  return (
    <>
      <img className="card__image" src={image} alt={altText} />
      <p className="card__text__small">
        Image licenced under <a href={licenceUrl}>{licenceType}</a>
        {attributionName && (
          <>
            &nbsp;by <a href={attributionUrl}>{attributionName}</a>
          </>
        )}
      </p>
    </>
  );
};

export default AnimalImage;
