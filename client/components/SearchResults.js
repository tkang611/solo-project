import React, {useEffect, useState} from 'react';
import CarDetails from './CarDetails';

const searchResults = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    fetch('/api/cars')
    .then((res) => {
      res.json()
      console.log(res.json())
    })
    .then((data) => console.log(data))
  }, [])
  
  return (
    <div className="search-page">
      <div className="cars">
        {cars && cars.map((car) => (
          <CarDetails key={car._id} car={car}/>
        ))}
      </div>
    </div>
  )
}

export default searchResults;