export default function TopBlock({ quote, index }) {
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
