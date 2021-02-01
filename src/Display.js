import React from "react";

const Display = (props) => {

  const {dogs} = props

  const loaded = () => {
    return (
      <div style={{textAlign: "center"}}>
        {dogs.map(dog => {
          return (
            <article key={dog._id}>
              <img src={dog.img}/>
              <h2>{dog.name}</h2>
              <h3>{dog.age}</h3>
              <button onClick={() => {
                props.selectDog(dog)
                props.history.push('/edit')
              }}>Edit Dog</button>
              <button onClick={() => {
                props.deleteDog(dog)
              }}>Delete Dog</button>
            </article>
          )
        })}
      </div>
    )
  }

  const loading = () => <h2>Loading ...</h2>

  return dogs.length === 0 ? loading() : loaded();
};

export default Display;
