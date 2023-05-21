import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Layout from './components/Layout';
import Soundbar from './components/Soundbar';

function App() {
  return (
    <>
    <Soundbar />
    <Routes>
      <Route path="/jeshwanth.github.io" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/jeshwanth.github.io/about" element={<About/>} />
        <Route path="/jeshwanth.github.io/projects" element={<Projects/>} />
        <Route path="/jeshwanth.github.io/contact" element={<Contact/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
