import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diseases from './pages/Diseases';
import Contact from './pages/Contact';

import Header from './component/Header';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  )
}
