import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuotesDataContext } from '../context/QuotesContext';

export default function VoteBlock() {
  //Get quoteFromDB from DB
  const { currentCount, setCurrentCount, allQuotesDB, lengthAllQuotesDB } =
    useContext(QuotesDataContext);

  const [trigger, setTrigger] = useState(false);

  return (
    <div className='quoteBox-vote'>
      <div style={{ gridColumn: '2' }}>
        <p className='quote'>
          <q>{allQuotesDB[currentCount]?.quote}</q>
        </p>
        <p className='author'>- {allQuotesDB[currentCount]?.fakeAuthor}</p>
        <form className='vote-Box'>
          <button
            className='boxButton funny'
            id='funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
            onClick={() => {
              lengthAllQuotesDB <= currentCount + 1
                ? setCurrentCount(0)
                : setCurrentCount(currentCount + 1);
              console.log(lengthAllQuotesDB);
              console.log(currentCount);
              console.log(allQuotesDB[currentCount]);
            }}
          >
            FUNNY
          </button>
          <button
            className='boxButton not-funny'
            id='not-funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
            onClick={() => {
              lengthAllQuotesDB <= currentCount + 1
                ? setCurrentCount(0)
                : setCurrentCount(currentCount + 1);
              console.log(lengthAllQuotesDB);
              console.log(currentCount);
              console.log(allQuotesDB[currentCount]);
            }}
          >
            NOT FUNNY
          </button>
        </form>
        <div className='buttonPart' style={{ display: 'flex' }}>
          <p className='credits'>
            Credits to: {allQuotesDB[currentCount]?.creator}
          </p>
          <a href='./' className='report'>
            !Report
          </a>
        </div>
      </div>
      <Link
        to='/'
        style={{ alignSelf: 'center' }}
        onClick={() => {
          lengthAllQuotesDB <= currentCount + 1
            ? setCurrentCount(0)
            : setCurrentCount(currentCount + 1);
          console.log(lengthAllQuotesDB);
          console.log(currentCount);
          console.log(allQuotesDB[currentCount]);
        }}
      >
        <img
          src='/arrow-right-3098.png'
          alt='next quote'
          style={{ height: '40px' }}
        />
      </Link>
    </div>
  );
}
