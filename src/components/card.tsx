import images from "../data/images-data";
import Cat from "../data/cat";
import Dog from "../data/dog";
import AnimalImage from "./animal-image"; //Image component

// interface CardProps {
//   name: string;
//   species: string;
//   favFoods: Array<string>;
//   birthYear: number;
//   catIndex: number;
// }

interface CardProps {
  animalObject: Cat | Dog;
  index: number;
  // image: ImageInterface | undefined;
}

const Card: React.FC<CardProps> = ({ animalObject, index }) => {
  const { name, species, favFoods, birthYear } = animalObject;
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>

      {/* only render an image if there's a corresponding entry in our images array*/}
      {index < images.length && (
        <AnimalImage
          image={images[index].image}
          altText={images[index].altText}
          licenceType={images[index].licenceType}
          licenceUrl={images[index].licenceUrl}
          attributionName={images[index].attributionName}
          attributionUrl={images[index].attributionUrl}
        />
      )}
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};
export default Card;
