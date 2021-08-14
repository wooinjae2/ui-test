import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const mealsList = meals.map((meal) => {
    console.log(meal)
    return <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  });

  


  useEffect(()=>{

    
    const fetchMeals = async () => {
      const response = await fetch('http://react-http-test-7e183-default-rtdb.firebaseio.com/meals.json');
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();
      console.log(responseData);
      
      const loadedMeals = [];
      for(const key in responseData){
        loadedMeals.push({
          id:key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description
        })
      }
      setMeals(loadedMeals);
      setIsLoading(false);
      
    }

    try{
      fetchMeals();
    } catch (error){
      setIsLoading(false);
      setHttpError(error.message)

    }
    
    
  }, [])

  if(isLoading){
    return(
      <section className={classes.MealsLoading}>
        isLoading
      </section>
    )
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
