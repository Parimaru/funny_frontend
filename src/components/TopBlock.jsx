import { useState, useContext } from 'react';
import { QuotesDataContext } from '../context/QuotesContext';

export default function TopBlock({ quote, index }) {
  const { currentCount, setCurrentCount, allQuotesDB, lengthAllQuotesDB } =
    useContext(QuotesDataContext);

  return (
    <div className='quoteBox-top' style={{ gridRow: `${index + 2}` }}>
      <div>
        <q>{quote.quote}</q>
        <div className='author'>- {quote.fakeAuthor}</div>
      </div>
      <div className='oneLine'>
        <div style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}>
          {`${quote.funny}x `}
          <button className='boxButton funny' id='funny'>
            FUNNY
          </button>
        </div>
      </div>
    </div>
  );
}
