import TopBlock from '../components/TopBlock';

export default function TopQuotesPage() {
  const quotesFromDB = [
    {
      quote: 'Lodrum, larum Löffelstiel',
      fakeAuthor: 'Uri Geller',
      originalAuthor: 'Sprichwort',
      funny: 5,
      notfunny: 2,
      creator: 'User',
      reported: false,
    },
    {
      quote: 'Larum, larum Löffelstiel',
      fakeAuthor: 'Uri Geller',
      originalAuthor: 'Sprichwort',
      funny: 5,
      notfunny: 2,
      creator: 'User',
      reported: false,
    },
    {
      quote: 'Lirum, larum Löffelstiel',
      fakeAuthor: 'Uri Geller',
      originalAuthor: 'Sprichwort',
      funny: 5,
      notfunny: 2,
      creator: 'User',
      reported: false,
    },
  ];

  return (
    <div className='page'>
      {quotesFromDB.map((quote, index) => (
        <TopBlock quote={quote} key={index} index={index} />
      ))}
    </div>
  );
}
