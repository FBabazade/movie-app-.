import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movies,setMovies] = useState([]);

  const getMovieRequest=async()=>{
    const url='http://www.omdbapi.com/?s=star wars&apikey=4b9e926f'
  const res=await fetch(url);
  const resJson=await res.json()
  console.log(resJson);
  setMovies(resJson.Search)
  }

  useEffect(()=>{
    getMovieRequest()
    
  },[])
  return (
    <>
      <h1>title</h1>
      
      <div className="container-fluid movie-app">
        <div className="d-flex">
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
}

export default App;
