import React from "react";
import Dog from "../data/dog";

interface DogCardProps {
  dogObject: Dog;
  dogIndex: number;
}

const DogCard: React.FC<DogCardProps> = ({ dogObject, dogIndex }) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 🐶 Props recieved are:",
    { dogObject, dogIndex }
  );
  const { name, species, favFoods, birthYear } = dogObject;
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default DogCard;
