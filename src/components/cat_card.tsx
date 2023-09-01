import Cat from "../data/cat";
import CatImage from "./cat_image";
import images from "../data/images-data";

interface CatCardProps {
  catObject: Cat;
  catIndex: number;
}
const CatCard: React.FC<CatCardProps> = ({ catObject, catIndex }) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    { catObject, catIndex }
  );

  const { name, species, favFoods, birthYear } = catObject;
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>

      {/* only render an image if there's a corresponding entry in our images array*/}
      {catIndex < images.length && (
        <CatImage
          image={images[catIndex].image}
          altText={images[catIndex].altText}
          licenceType={images[catIndex].licenceType}
          licenceUrl={images[catIndex].licenceUrl}
          attributionName={images[catIndex].attributionName}
          attributionUrl={images[catIndex].attributionUrl}
        />
      )}
      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

/*
interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  catIndex:number;
}
const CatCard: React.FC<CatCardProps> = (props) => {
  console.log(
    "CatCard receiving props from App?! Come in App?! 😸 Props received are: ",
    props
  );
  //const { name, species, favFoods, birthYear, catIndex } = props;
  return (
    <div className="card">
      <h3 className="card__text card__header">{props.name}</h3>
      <p className="card__text">Species: {props.species}</p>
      <p className="card__text">Favourite Food(s): {props.favFoods}</p>
      <p className="card__text">Birth Year: {props.birthYear}</p>
      {props.catIndex < images.length && (
				<CatImage
					image={images[props.catIndex].image}
					altText={images[props.catIndex].altText}
					licenceType={images[props.catIndex].licenceType}
					licenceUrl={images[props.catIndex].licenceUrl}
					attributionName={images[props.catIndex].attributionName}
					attributionUrl={images[props.catIndex].attributionUrl}
				/>
			)}
    </div>
  );
};
*/
export default CatCard;
