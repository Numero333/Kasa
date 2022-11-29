import { Routes, Route } from 'react-router-dom'
import { About } from './components/pages/About';
import { Apartement } from './components/pages/Apartment';
import { Error } from './components/pages/Error';
import { Home } from "./components/pages/Home"
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Apartement' element={<Apartement />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    </>
  )
}

export default App;
