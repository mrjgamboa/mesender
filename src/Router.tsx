import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Landing from './pages/Landing';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
