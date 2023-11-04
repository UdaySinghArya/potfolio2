import './App.css';

import About from './components/About';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import ContactsUs from './components/ContactsUs';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about-me' element={<About/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/contact-us' element={<ContactsUs/>}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}
export default App;
