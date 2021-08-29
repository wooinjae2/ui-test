import { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api'

const NewQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes');
        }

    }, [status, history]);
    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);
        console.log(quoteData);

        //implement programmatic Navigation
        
    }

    return <QuoteForm isLoading={status ==='pending'} onAddQuote={addQuoteHandler}/>
}
export default NewQuote; 