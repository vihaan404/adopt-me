import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Pets Not Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            breed={pet.breed}
            name={pet.name}
            images={pet.images}
            location={`${pet.cite} , ${pet.state} `}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
