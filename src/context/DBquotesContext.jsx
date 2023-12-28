import { useState, createContext, useEffect } from 'react';

export const QuotesDataContext = createContext();

export default function QuotesDataContextProvider(props) {
  const [currentCount, setCurrentCount] = useState(0);
  const [allQuotesDB, setAllQuotes] = useState([]);
  const [lengthAllQuotesDB, setLengthAllQuotes] = useState();

  const fetchQuotesDB = async () => {
    try {
      const url = 'https://funnyquotes.onrender.com/qData';
      const response = await fetch(`${url}`);
      const data = await response.json();
      setAllQuotes(data);
      setLengthAllQuotes(Object.keys(data).length);
      console.log(data);
    } catch {
      console.log('Fetching from DB failed');
    }
  };

  useEffect(() => {
    fetchQuotesDB();
  }, []);

  return (
    <QuotesDataContext.Provider
      value={{
        currentCount,
        setCurrentCount,
        allQuotesDB,
        lengthAllQuotesDB,
        setLengthAllQuotes,
      }}
    >
      {props.children}
    </QuotesDataContext.Provider>
  );
}
