import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header name={32} age={30}></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
