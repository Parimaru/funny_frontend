import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VoteBlock() {
  //Get quoteFromDB from DB

  const quoteFromDB = {
    quote: 'Lirum, larum Löffelstiel',
    fakeAuthor: 'Uri Geller',
    originalAuthor: 'Sprichwort',
    funny: 5,
    notfunny: 2,
    creator: 'User',
    reported: false,
  };

  const [trigger, setTrigger] = useState(false);

  return (
    <div className='quoteBox-vote'>
      <div style={{ gridColumn: '2' }}>
        <p className='quote'>
          <q>{quoteFromDB?.quote}</q>
        </p>
        <p className='author'>- {quoteFromDB?.fakeAuthor}</p>
        <form className='vote-Box'>
          <button
            className='boxButton funny'
            id='funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
          >
            FUNNY
          </button>
          <button
            className='boxButton not-funny'
            id='not-funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
          >
            NOT FUNNY
          </button>
        </form>
        <div className='buttonPart' style={{ display: 'flex' }}>
          <p className='credits'>Credits to: {quoteFromDB?.creator}</p>
          <a href='./' className='report'>
            !Report
          </a>
        </div>
      </div>
      <Link
        to='/'
        style={{ alignSelf: 'center' }}
        onClick={() => setTrigger(!trigger)}
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
