
import DUMMY_MEALS from "../../asset/dummy";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const AvailableMeals = (props) => {
  const mealList = DUMMY_MEALS.map((data) => <MealItem key={data.id} id={data.id} name={data.name} desc={data.description} price={data.price} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
