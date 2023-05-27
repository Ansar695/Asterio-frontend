import React from 'react'
import "./movies.css"
import { genres, options, ratings } from './Ratings';
import Results from './Results';
import { useState } from 'react';
import { movies } from './MoviesList';
import { useEffect } from 'react';
import { MultiSelect } from "react-multi-select-component";

const Movies = () => {
  const[movieName, setMovieName] = useState("")
  const[selectedRatings, setSelectedRatings] = useState([])
  const[selectedGenres, setSelectedGeneres] = useState([])
  const[results, setResults] = useState([])

//   SEARCH BY MOVIE NAME
  const searchMovie = () => {
    const filterResults = movies?.filter(movie =>
        movie?.title?.toLowerCase().includes(movieName?.toLowerCase())
      );
      setResults(filterResults)
  }
  console.log(selectedRatings)

  //   SEARCH BY RATINGS NAME
  const searchByRatings = () => {
    const filterResults = movies?.filter(movie => {
        return selectedRatings.some(rating => parseInt(rating.value) === Math.round(movie.ratings));
      });
      setResults(filterResults);
  }

  //   SEARCH BY GENERS
  const searchByGenres = () => {
    const filterResults = movies?.filter(movie => {
        return selectedGenres.some(genre => genre.value === movie.category);
      });
      setResults(filterResults);
  }
  useEffect(() => {
    searchMovie()
  }, [movieName])

  useEffect(() => {
    if(selectedRatings.length > 0){
        searchByRatings()
    }
  }, [selectedRatings])

  useEffect(() => {
    if(selectedGenres.length > 0){
        searchByGenres()
    }
  }, [selectedGenres])

  return (
    <div className="movie-container">
      <div className="filter_wrapper">
        <input 
          type="text" 
          className="form-control"
          placeholder="Enter Movie Name." 
          onChange={(e) => setMovieName(e.target.value)} 
        />
        
        <div className='rating_select'>
            <MultiSelect
                options={options}
                value={selectedRatings}
                onChange={setSelectedRatings}
                labelledBy="Ratings"
            />
        </div>

        <div className='genre_select'>
            <MultiSelect
                options={genres}
                value={selectedGenres}
                onChange={setSelectedGeneres}
                labelledBy="Genere"
            />
        </div>
      </div>
      
      {results?.length > 0 ? <Results data={results} movieName={movieName} /> : ''}
    </div>
  )
}

export default Movies