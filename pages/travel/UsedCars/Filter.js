import { useState } from 'react';
import { Stack, Button } from '@mui/material';
const cars = [
  { name: 'Toyota', model: 'Camry' },
  { name: 'Honda', model: 'Civic' },
  { name: 'Ford', model: 'Mustang' },
  { name: 'Chevrolet', model: 'Camaro' },
  { name: 'BMW', model: 'M3' },
];

const CarFilter = () => {
  const [filteredCars, setFilteredCars] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [modelInput, setModelInput] = useState('');

  const handleNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleModelInputChange = (event) => {
    setModelInput(event.target.value);
  };

  const handleFilterClick = () => {
    const filtered = cars.filter(
      (car) =>
        car.name.toLowerCase().includes(nameInput.toLowerCase()) &&
        car.model.toLowerCase().includes(modelInput.toLowerCase())
    );
    setFilteredCars(filtered);

  };
  const handleCombinedInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilteredCars(
      cars.filter(
        (car) =>
          car.name.toLowerCase().includes(inputValue) ||
          car.model.toLowerCase().includes(inputValue)
      )
    );
  };

  return (
    <Stack mb="50px">
      <Stack style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search by car name or model or both"
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginRight: '10px',
            flex: 1,
          }}
          onChange={handleCombinedInputChange}
        />

        <Button
          variant="contained"
          
          onClick={handleFilterClick}
        >
          Filter
        </Button>
      </Stack>
      {/* <ul style={{ listStyleType: 'none', padding: '0', margin: '0', width: '50%' }}>
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              {car.name} - {car.model}
            </li>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No cars found.</p>
        )
        }
      </ul> */}
    </Stack>
  );
};

export default CarFilter;
