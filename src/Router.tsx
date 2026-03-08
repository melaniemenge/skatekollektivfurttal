import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ContactForm from './ContactForm';
import Impressum from './Impressum';
import MitgliedWerden from './MitgliedWerden';
import UeberUns from './UeberUns';  
import Bedingungen from './Bedigungen';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kontakt" element={<ContactForm />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/mitglied-werden" element={<MitgliedWerden />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/Bedingungen" element={<Bedingungen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
