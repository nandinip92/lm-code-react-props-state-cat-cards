import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
//import CatCard from "./components/cat_card";
//import DogCard from "./components/dogs_card";
import Card from "./components/card";
import UserInputField from "./components/input-field";

import Cat from "./data/cat";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import images from "./data/images-data";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Dog from "./data/dog";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  //const [ data, setData ] = useState(/*our state/data we want React to watch goes here*/)
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCount = cats.length;

  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  const dogCount = dogs.length;

  /*User Input Form code START*/
  const [animalName, setAnimalName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [favFoods, setFavFoods] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");

  //Adding tha animal data to its corresponding state
  const addAnimalToSpecies = (animal_species: string, newAnimal: Cat | Dog) => {
    if (animal_species === "CAT") setCats([...cats, newAnimal]);
    if (animal_species === "DOG") setDogs([...dogs, newAnimal]);
  };

  const addAnimalData = () => {
    const animal_species = species.toUpperCase();
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

  cats.forEach((cat, index) => {
    const id = uuidv4();
    cat.id = id;
    if (images[index] !== undefined) images[index].id = id;
  });

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
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
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <Card
              key={cat.id}
              animalObject={cat}
              index={index}
              image={images.find((image) => image.id === cat.id)}
            />
          ))}

          {
            //using lazy way to create Keys for 'dogs'
            dogs.map((dog, index) => (
              <Card
                key={index}
                animalObject={dog}
                index={cats.length - 1 + index} //dog images start after cat images
                image={undefined}
              />
            ))
          }

          {/* {cats.map((cat, index) => (
            <CatCard key={cat.id} catObject={cat} catIndex={index} />
          ))}
          {dogs.map((dog, index) => (
            <DogCard key={index} dogObject={dog} dogIndex={index} />
          ))} */}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
