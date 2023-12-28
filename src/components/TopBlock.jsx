export default function TopBlock({ quote, index }) {
  return (
    <div className='quoteBox-top' style={{ gridRow: `${index + 2}` }}>
      <div>
        <q>{quote.quote}</q>
        <p className='author'>- {quote.fakeAuthor}</p>
      </div>
      <div className='voted'>
        <div className='votesFunny'>
          <div>
            {`${quote.funny}x `}
            <button className='boxButton funny' id='funny'>
              FUNNY
            </button>
          </div>
        </div>
        <div className='votesNotFunny'>
          <div>
            {`${quote.notfunny}x `}
            <button className='boxButton not-funny' id='funny'>
              NOT FUNNY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
