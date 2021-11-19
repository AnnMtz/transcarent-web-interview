import data from '../data.json';
import { useState, useEffect } from 'react';

const useNames = () => {
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    setAnimal(data);
  }, []);
  return animal;
};

export default useNames;
