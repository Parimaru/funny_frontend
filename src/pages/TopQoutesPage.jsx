import TopBlock from '../components/TopBlock';
import { useState, useEffect } from 'react';

export default function TopQuotesPage() {
  const [topQuotesDB, setTopQuotesDB] = useState();

  const fetchTopQuotesDB = async () => {
    try {
      const url = 'https://funnyquotes.onrender.com/qData/top';
      const response = await fetch(`${url}`);
      const data = await response.json();
      setTopQuotesDB(data);
      console.log(data);
    } catch {
      console.log('Fetching from DB failed');
    }
  };

  useEffect(() => {
    fetchTopQuotesDB();
  }, []);

  return (
    <div className='page'>
      {topQuotesDB?.map((quote, index) => (
        <TopBlock quote={quote} key={index} index={index} />
      ))}
    </div>
  );
}
