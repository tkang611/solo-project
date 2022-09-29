import React from 'react';

const CarDetails = ({car}) => {
  return (
    <div className="car-details">
      <h4>{car.name}</h4>
      <img src={car.img} />
      <p>{car.desc}</p>
      <ul>
        {car.props.map((prop) => (
          <li>{prop}</li>
        ))}
      </ul>
    </div>
  )
}

export default CarDetails