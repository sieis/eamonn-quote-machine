import { useState } from "react";
import {QuoteAuthor} from './QuoteAuthor';
import {QuoteText} from './QuoteText';
import {TweetQuote} from './TweetQuote';
import { quoteList } from '../quotes';

let random_quote_num = Math.floor(Math.random()*quoteList.length);
let first_quote =(quoteList[random_quote_num].q);
let first_author =(quoteList[random_quote_num].a);

export const QuoteBox = () => {
    const [quote, setQuote] = useState(first_quote)
    const [author, setAuthor] = useState(first_author)
    return (
        <div id="quote-box" className="container card">
            <QuoteText quote={quote}/>
            <QuoteAuthor author={author}/>
            <div id="buttons">
                <TweetQuote/>
                <button onClick={() => {
                    let new_num = Math.floor(Math.random()*quoteList.length)
                    setQuote(quoteList[new_num].q);
                    setAuthor(quoteList[new_num].a);
                    }
                } 
                id="new-quote">New Quote
                </button>
            </div>
        </div>
    )
  }
  