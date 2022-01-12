import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="contact/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
