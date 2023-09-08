import { useState } from "react";
import UserInputField from "./input-field";
import Cat from "../data/cat";
import Dog from "../data/dog";

interface FormProps {
  cats: Array<Cat>;
  dogs: Array<Dog>;
  setCats: (cats: Array<Cat>) => void;
  setDogs: (dogs: Array<Dog>) => void;
}

const Form: React.FC<FormProps> = ({ cats, dogs, setCats, setDogs }) => {
  /*User Input Form code START*/
  const [animalName, setAnimalName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [favFoods, setFavFoods] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");

  //Adding tha animal data to its corresponding state
  const addAnimalToSpecies = (animal_species: string, newAnimal: Cat | Dog) => {
    if (animal_species === "CAT") {
      setCats([...cats, newAnimal]);
    }
    if (animal_species === "DOG") setDogs([...dogs, newAnimal]);
  };

  const addAnimalData = () => {
    let animal_species = "";
    //As of now considering only two species eithre Cat or Dog
    if (species.toUpperCase().includes("CAT")) animal_species = "CAT";
    if (species.toUpperCase().includes("DOG")) animal_species = "DOG";

    const favourite_foods = favFoods.split(",");
    const newAnimal = {
      name: animalName,
      species: species,
      favFoods: favourite_foods,
      birthYear: parseInt(birthYear),
    };
    addAnimalToSpecies(animal_species, newAnimal);
    cleatTextFields();
  };

  const cleatTextFields = () => {
    setAnimalName("");
    setSpecies("");
    setFavFoods("");
    setBirthYear("");
  };
  /*User Input Form Code END*/
  return (
    <div className="form-container">
      <div className="user-input-form">
        <UserInputField
          name="Name"
          value={animalName}
          onValueChange={setAnimalName}
        />
        <UserInputField
          name="Species"
          value={species}
          onValueChange={setSpecies}
        />
        <UserInputField
          name="Favourite Foods"
          value={favFoods}
          onValueChange={setFavFoods}
        />
        <UserInputField
          name="Birth Year"
          value={birthYear}
          onValueChange={setBirthYear}
        />

        <input type="submit" title="Submit" onClick={addAnimalData} />
      </div>
    </div>
  );
};

export default Form;
