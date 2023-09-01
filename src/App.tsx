import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import CatCard from "./components/cat_card";
import DogCard from "./components/dogs_card";

import Cat from "./data/cat";
import catData from "./data/cat-data";
import Dogs from "./data/dog";
import dogData from "./data/dog-data";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  catData.forEach((cat) => (cat.id = uuidv4()));
  //console.log("--->", catData);

  //const [ data, setData ] = useState(/*our state/data we want React to watch goes here*/)
  const [cats, setCats] = useState<Array<Cat>>(catData);

  //console.log("Our pretties 😻: ", cats);
  const catCount = cats.length;
  //console.log("catCount --->", catCount);

  const [dogs, setDogs] = useState<Array<Dogs>>(dogData);
  const dogCount = dogs.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard key={cat.id} catObject={cat} catIndex={index} />
          ))}
          {/* {cats.map((cat) => (
            <CatCard
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
            />} */}
          {dogs.map((dog, index) => (
            <DogCard key={index} dogObject={dog} dogIndex={index} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
