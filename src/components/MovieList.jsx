import "../App.css";
import AddFav from "./AddFav";
const MovieList = (props) => {return (
    <>
      {props.movies.map((movie) => ( 
        <div className="image-container m-2">
          <img style={{height:"350px"}} src={movie?.Poster} alt="movieImg" />
          <div onClick={()=>props.handleFavClick(movie)} className="overlay d-flex aligh-item-center justify-content-center">
            <AddFav/>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
