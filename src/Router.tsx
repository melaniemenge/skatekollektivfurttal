import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactForm from './ContactForm';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kontakt" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
