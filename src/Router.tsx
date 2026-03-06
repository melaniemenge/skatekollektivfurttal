import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactForm from './ContactForm';
import Impressum from './Impressum';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kontakt" element={<ContactForm />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
