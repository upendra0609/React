import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar title="TextUtils" about="About"></Navbar>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text here"></TextForm>}/>
          <Route exact path="aboutus" element={<AboutUs></AboutUs>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
