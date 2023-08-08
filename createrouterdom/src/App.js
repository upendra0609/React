import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Mail from './components/Mail';
import Insta from './components/Insta';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path='/app' element={<Home />} >
              <Route path=':userId/:name' element={<UserInfo />} />
            </Route>
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}>
            <Route index element={<Mail />} />
            <Route path='mail' element={<Mail />} />
            <Route path='insta' element={<Insta />} />
          </Route>
          <Route exact path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
