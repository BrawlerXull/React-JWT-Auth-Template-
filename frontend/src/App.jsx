import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <BrowserRouter>

<Toaster position="top-right" richColors />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}