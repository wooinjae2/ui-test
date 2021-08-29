import { useEffect } from 'react';
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Woo", text: "Learning React is Great!" },
];

const AllQuotes = () => {
  const { sendRequest, status, data : loadedQuote, error} = useHttp(getAllQuotes, true);

  useEffect(()=>{
      sendRequest()
  },[sendRequest])

  if(status ==='pending'){
      <div className="centered">
          <LoadingSpinner/>
      </div>
  }

  if(error){
      return <p className="centered focused">{error}</p>
  }

  if(status === 'completed' && (!loadedQuote || loadedQuote.length === 0)){
      return <NoQuotesFound/>
  }

  console.log(loadedQuote)

  return <QuoteList quotes={loadedQuote ? loadedQuote : []} />;
};

export default AllQuotes;
