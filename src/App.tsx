import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Form from "./components/form";

import Cat from "./data/cat";
import Dog from "./data/dog";
import catData from "./data/cat-data";
import dogData from "./data/dog-data";
import images from "./data/images-data";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCount = cats.length;

  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  const dogCount = dogs.length;

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
        <Form cats={cats} dogs={dogs} setCats={setCats} setDogs={setDogs} />
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
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
