import { useState, useEffect, useCallback } from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import {useParams } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import {getAllComments} from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { quoteId } = params;
  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  },[sendRequest, quoteId])
  
  useEffect(()=>{
    sendRequest(params.quoteId);
  },[params.quoteId, sendRequest]);


  let comments;
  if(status === 'pending'){
    comments = (<div className="centered">
      <LoadingSpinner/>
    </div>)
  }

  

  if(status === 'completed' && (loadedComments && loadedComments.length > 0)){
    comments = <CommentList comments={loadedComments}/>
  }
  
  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className="centered"> No Comment exist</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onAddComment={addCommentHandler}/>}
      <p>{comments}</p>
    </section>
  );
};

export default Comments;
