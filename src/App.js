import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

//58d398b1
//movies db api 
const API_URL='http://www.omdbapi.com?apikey=58d398b1';

const App = () => {
    //movies state 
    const [movies, setMovies] = useState([]); 
    //search state
    const [searchTerm , setSearchTerm] = useState('');

    const searchMovies = async(title) => { //async stands for asynchronous data which means that it takes time to fetch these movies 
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(movies);
        console.log(movies[0]);
        
    } 

    
        
    //we want to fetsh the data from this api as soon as our component loads, so we need to use useEffect
    useEffect(()=> {
        searchMovies("");
    },[]);

    return (
        <div className="app">
            <h1>Movie Land </h1>
            <div className="search">
                <input
                 placeholder="Search for movies"
                 value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                 src={SearchIcon}
                 alt="search"
                 onClick={() =>{searchMovies(searchTerm)}}
                 />
            </div>

            {
                movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie)=> 
                        <MovieCard movie={movie}/>
                        )}
                    </div>
                ) : 
                (
                    <div className='empty'> 
                        <h2>No movies found</h2>
                    </div>
                )
            }
            

        </div>
    );
}
export default App;