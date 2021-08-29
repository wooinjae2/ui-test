import { Fragment } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { getSingleQuote} from '../lib/api';
import { useEffect } from 'react';

import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Woo", text: "Learning React is Great!" },
];
const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  console.log(match);

  useEffect(()=>{
      console.log(params.quoteId);
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId])

  if(status ==='pending'){
      return <div className="centered">
          <LoadingSpinner/>
      </div>
  }

  if(error){
      return <p className="centerd"> {error}</p>
  }

  console.log(loadedQuote);
  if(!loadedQuote.text){
      return <p>No quote Found</p>
  }

  
  return (
    <Fragment>
        <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
        <Route path={`${match.path}`} exact>
        <div className="centered">
            <Link className="btn-flat" to={`${match.url}/comments`}>Load Comments</Link>
        </div>
        </Route>
        
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
