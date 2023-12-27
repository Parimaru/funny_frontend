import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewQuoteBlock() {
  //Get quoteFromDB from API

  const [randomQuote, setRandomQuote] = useState({
    0: {
      quote:
        'For me, unemployment and poverty in the Greater Montreal area is not mainly a problem of structure, or design, or statistics. It is a profoundly human situation.',
      author: 'Sherri Shepherd',
      category: 'family',
    },
  });

  const getQuoteAPI = async (booleanFunny) => {
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=',
        {
          headers: { 'X-Api-Key': 'qn1WqvpBosrKsx9hyKLe2g==kzgTcM5MGb2jui7R' },
        }
      );
      const data = await response.json();
      setRandomQuote(data);
      console.log(data);
    } catch (error) {
      console.log('Get Quote from API failed', error);
    }
  };

  const randomAngle = Math.floor(Math.random() * 20) - 10;

  const [trigger, setTrigger] = useState(false);
  const [random, setRandom] = useState(1);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, [trigger]);

  const handleSubmit = async (e) => {
    const fakeAuthor = e.target.elements['fakeAuthor'].value;
    const creator = e.target.elements['creator'].value;
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/qData`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          fakeAuthor,
          creator,
          originalAuthor: randomQuote[0].author,
          quote: randomQuote[0].quote,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Update votes on DB failed', error);
    }
  };

  useEffect(() => {
    // getQuoteAPI();
  }, []);

  return (
    <div className='quoteBox-new'>
      <div style={{ gridColumn: '2' }}>
        <div>
          <p className='quote'>
            <q>{randomQuote[0]?.quote}</q>
          </p>
          <Link
            to='/creative'
            key={random}
            style={{ alignSelf: 'center' }}
            onClick={() => setTrigger(!trigger)}
          >
            <button
              style={{ rotate: `${randomAngle}deg` }}
              className='boxButton neutral pointer'
              onClick={() => {
                getQuoteAPI();
              }}
            >
              Next Quote
            </button>
          </Link>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className='creativeInput'>
            <label htmlFor='fakeAuthor'>Funny Fake Author</label>
            <input type='text' id='fakeAuthor' maxLength='40' required />
            <br />
            <label htmlFor='creator'>Your Nickname</label>
            <input type='text' id='creator' maxLength='20' required />
            <br />
          </div>
          <button type='submit'>Publish</button>
        </form>
      </div>
    </div>
  );
}
