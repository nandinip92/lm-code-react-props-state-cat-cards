import Cat from "../data/cat";
import CatImage from "./cat_image";
import cat1 from "../assets/images/cat1.jpg";
interface CatCardProps {
  catObject: Cat;
}
const CatCard: React.FC<CatCardProps> = (props) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    props
  );
  return (
    <div className="card">
      <h3 className="card__text card__header">{props.catObject.name}</h3>
      <CatImage image={cat1} altText="A lovely cat !!!" />
      <p className="card__text">Species: {props.catObject.species}</p>
      <p className="card__text">
        Favourite Food(s): {props.catObject.favFoods}
      </p>
      <p className="card__text">Birth Year: {props.catObject.birthYear}</p>
    </div>
  );
};

/*
interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}
const CatCard: React.FC<CatCardProps> = (props) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    props
  );
  return (
    <div className="card">
      <h3 className="card__text card__header">{props.name}</h3>
      <p className="card__text">Species: {props.species}</p>
      <p className="card__text">Favourite Food(s): {props.favFoods}</p>
      <p className="card__text">Birth Year: {props.birthYear}</p>
    </div>
  );
};
*/
export default CatCard;
