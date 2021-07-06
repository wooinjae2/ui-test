

function UserList (props) {

    
    return <>
    {props.userList.map(userItem=> <div>
        <span>{userItem.name}</span><span>{userItem.age}</span>
    </div>)}
    </>

}

export default UserList;