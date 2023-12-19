
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';

function App() {
  return (
    <div className='App'>
      <Router >
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/menu' exact Component={Menu}/>

          //basically tell router to render only one router eachtime
        </Routes>
        <Footer/>
     </Router>

    </div>
  );
}

export default App;
