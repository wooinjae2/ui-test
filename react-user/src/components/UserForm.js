import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './UserForm.module.css'

const UserForm = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  console.log(classes.input);

  return (
      
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age" type="number">
          Age
        </label>
        <input id="age" type="text" />
        <Button type="submit">Add User </Button>
      </form>
    </Card>
  );
};

export default UserForm;
