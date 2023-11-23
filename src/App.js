import './App.css';
import { Routes, Route } from 'react-router-dom';
import VotePage from './pages/VotePage';
import CreateNew from './pages/CreateNewPage';
import Navbar from './components/Navbar';
import TopQuotesPage from './pages/TopQoutesPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/vote' element={<VotePage />} />
        <Route path='/creative' element={<CreateNew />} />
        <Route path='/top' element={<TopQuotesPage />} />
        <Route path='*' element={<VotePage />} />
      </Routes>
    </div>
  );
}

export default App;
