import { useContext } from 'react';
import { QuotesDataContext } from '../context/DBquotesContext';

export default function VoteBlock() {
  //Get quoteFromDB from DB
  const { currentCount, setCurrentCount, allQuotesDB, lengthAllQuotesDB } =
    useContext(QuotesDataContext);

  const vote = async (booleanFunny) => {
    console.log(allQuotesDB[currentCount]._id);
    try {
      const url = `https://funnyquotes.onrender.com/qData/${allQuotesDB[currentCount]._id}`;
      const response = await fetch(`${url}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFunny: booleanFunny }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Update votes on DB failed', error);
    }
  };

  return (
    <div className='quoteBox-vote'>
      <div style={{ gridColumn: '2' }}>
        <p className='quote'>
          <q>{allQuotesDB[currentCount]?.quote}</q>
        </p>
        <p className='author'>- {allQuotesDB[currentCount]?.fakeAuthor}</p>
        <div className='vote-Box'>
          <button
            className='boxButton funny pointer'
            id='funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
            onClick={() => {
              lengthAllQuotesDB <= currentCount + 1
                ? setCurrentCount(0)
                : setCurrentCount(currentCount + 1);
              vote(true);
            }}
          >
            FUNNY
          </button>
          <button
            className='boxButton not-funny pointer'
            id='not-funny'
            style={{ rotate: `${Math.floor(Math.random() * 20) - 10}deg` }}
            onClick={() => {
              lengthAllQuotesDB <= currentCount + 1
                ? setCurrentCount(0)
                : setCurrentCount(currentCount + 1);
              vote(false);
            }}
          >
            NOT FUNNY
          </button>
        </div>
        <div className='buttonPart' style={{ display: 'flex' }}>
          <p className='credits'>
            Credits to: {allQuotesDB[currentCount]?.creator}
          </p>
          {/* <a href='./' className='report'>
            !Report
          </a> */}
        </div>
      </div>
      <div
        to='/'
        style={{ alignSelf: 'center' }}
        onClick={() => {
          lengthAllQuotesDB <= currentCount + 1
            ? setCurrentCount(0)
            : setCurrentCount(currentCount + 1);
        }}
        className='pointer'
      >
        <img
          src='/arrow-right-3098.png'
          alt='next quote'
          style={{ height: '40px' }}
        />
      </div>
    </div>
  );
}
