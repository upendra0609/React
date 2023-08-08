import Header from './components/Header';
import Movie from './components/Movie';
import Movies from './Movies.json'

function App() {
  return (
    <>
    <div className="App">
      <Header></Header>
    </div>
    <div className="main">
      {
        Movies.map((movie,index)=>{
          return(
            <Movie
            index = {index}
            imdbID={movie.imdbID}
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie.Poster}
            >
            </Movie>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
