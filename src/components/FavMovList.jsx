import React from 'react'
import Remove from './Remove'

function FavMovList(props) {
  return (
    <> {props.movies.map((movie) => ( 
        <div className="image-container m-2">
          <img style={{height:"350px"}} src={movie?.Poster} alt="movieImg" />
          <div onClick={()=>props.handleFavClick(movie)} className="overlay d-flex aligh-item-center justify-content-center">
            <Remove/>
          </div>
        </div>
      ))}</>
  )
}

export default FavMovList