import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewQuoteBlock() {
  //Get quoteFromDB from DB
  const quoteFromDB = {
    quote: 'Lirum, larum Löffelstiel',
    fakeAuthor: 'Uri Geller',
    originalAuthor: 'Sprichwort',
    funny: 0,
    notfunny: 0,
    creator: 'User',
    reported: false,
  };

  const randomAngle = Math.floor(Math.random() * 20) - 10;

  const [trigger, setTrigger] = useState(false);
  const [random, setRandom] = useState(1);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, [trigger]);

  return (
    <div className='quoteBox-new'>
      <div style={{ gridColumn: '2' }}>
        <div>
          <p className='quote'>
            <q>{quoteFromDB?.quote}</q>
          </p>
          <Link
            to='/creative'
            key={random}
            style={{ alignSelf: 'center' }}
            onClick={() => setTrigger(!trigger)}
          >
            <button
              style={{ rotate: `${randomAngle}deg` }}
              className='boxButton neutral'
            >
              Next Quote
            </button>
          </Link>
        </div>
        <br />
        <form>
          <div className='creativeInput'>
            <label htmlFor='fakeAuthor'>Funny Fake Author</label>
            <input type='text' id='fakeAuthor' />
            <br />
            <label htmlFor='userName'>Your Nickname</label>
            <input type='text' id='userName' />
            <br />
          </div>
          <button type='submit'>Publish</button>
        </form>
      </div>
    </div>
  );
}
