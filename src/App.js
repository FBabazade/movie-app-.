import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import FavMovList from "./components/FavMovList";

function App() {
  const [movies, setMovies] = useState([]);
  const [fav,setFav]=useState([]);
  const [searchValue, setSearchValue]=useState("")

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=4b9e926f`;
    const res = await fetch(url);
    const resJson = await res.json();
   console.log(resJson?.Search);
    if(resJson?.Search){
      setMovies(resJson?.Search);
    }

  };

  useEffect(() => {
    getMovieRequest(searchValue)
   
  }, [searchValue]);
  
  const addFavMovie=(movie)=>{
    console.log(movie,"movie")
    const newFavList=[...fav,movie]
    setFav(newFavList)
  }
  const removeMovie=(movie)=>{
    const newFavList=fav.filter(favourite=>favourite.imdbID!==movie.imdbID
  )
setFav(newFavList)}
  
  return (
    <>
      <div className="d-flex m-4 align-items-center">
        <MovieListHeading heading="movies" />
        <SearchBox serachValue={searchValue} setSearchValue={setSearchValue}/>
      </div>

      <div className="container-fluid movie-app">
        <div className="d-flex">
          <MovieList handleFavClick={addFavMovie} movies={movies} />
        </div>
      </div>
      <div className="d-flex m-4 align-items-center">
        <MovieListHeading heading="Favorites" />
       </div>
       <div className="container-fluid movie-app">
        <div className="d-flex">
          <FavMovList handleFavClick={removeMovie} movies={fav} />
        </div>
      </div>
    </>
  );
}

export default App;
