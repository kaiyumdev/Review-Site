 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Not_Found from './components/Not_Found/Not_Found';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Not_Found></Not_Found>}></Route>
      </Routes>
    </div>
  );
}

export default App;
