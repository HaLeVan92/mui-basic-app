import './App.css';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import { Routes, Route } from 'react-router-dom';
import ThemeProvider from './theme';



function App() {
  return (
   <>
   <ThemeProvider>
      <SearchAppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/book/:id" element={<DetailPage/>} />
      </Routes>
    </ThemeProvider>
   </>
  );
}

export default App;
