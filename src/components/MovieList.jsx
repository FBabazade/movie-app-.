
import "../App.css"
const MovieList = (props) => {
  return (
   <>
   {props.movies.map((movie,index)=>
   <div className='m-2' ><img src={movie.Poster} alt="movieImg" /></div>)}
   </>
  )
}

export default MovieList