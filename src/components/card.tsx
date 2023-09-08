import images from "../data/images-data";
import Cat from "../data/cat";
import Dog from "../data/dog";
import AnimalImage from "./animal-image"; //Image component
import ImageInterface from "../data/image-interface";

interface CardProps {
  animalObject: Cat | Dog;
  index: number;
  image: ImageInterface | undefined;
}

const Card: React.FC<CardProps> = ({ animalObject, index, image }) => {
  const { name, species, favFoods, birthYear } = animalObject;
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>

      {/* only render an image if there's a corresponding entry in our images array*/}
      {index < images.length && <AnimalImage animalImage={image} />}
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default Card;
