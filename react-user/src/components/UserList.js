import Card from "../UI/Card";
import classes from './UserList.module.css'
function UserList(props) {
    console.log('props', props);
  return <Card className={classes.users}>
    <ul>
      {props.userList.map((userItem) => (
        <li key={userItem.id}>
          {userItem.name} ({userItem.age} Years old)
        </li>
      ))}
    </ul>
  </Card>;
}

export default UserList;
