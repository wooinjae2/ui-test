import { useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  
  const [taskText, setTaskText] = useState('') 

  const createTaskFunction = (taskObj) => {
    const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);

  }

  const httpData = useHttp({
    url: 'https://react-http-test-7e183-default-rtdb.firebaseio.com/tasks.json',
    method: 'POST',
    body: { text: taskText },
    headers: {
      'Content-Type': 'application/json',
    }
  },createTaskFunction)

  const enterTaskHandler = async (taskText) => {
    
    setTaskText(taskText);
    sendRequest();
  };

  const [isLoading, error, sendRequest] = httpData;

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
