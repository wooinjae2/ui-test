import {useState} from 'react';
import Modal from './Modal';

function UserForm (props) {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    
    const saveHandler = () =>{
        if(validCheck()){
            props.saveUserInfo({name:userName, age:userAge});
        }else{
            setModalOpen(true);
        }
        
    }

    const validCheck = () =>{
        if(userName === '' || userAge === ''){
            return false;
        }
        return true;
    }

    const onClickConfirm = () => {
        setModalOpen(false);
    }

    return (
        <div>
            <Modal modalOpen={modalOpen} onClickConfirm={onClickConfirm}/>
            <input value={userName} onChange={e =>{setUserName(e.target.value)}} />
            <input value={userAge} onChange={e =>{setUserAge(e.target.value)}} />
            <button onClick={saveHandler}>Save</button>
        </div>
    )
}

export default UserForm;