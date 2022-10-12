import React from "react";
import { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

//58d398b1
//movies db api 
const API_URL='http://www.omdbapi.com?apikey=58d398b1';

const App = () => {
    const searchMovies = async(title) => { //async stands for asynchronous data which means that it takes time to fetch these movies 
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);

    } 
    
        
    //we want to fetsh the data from this api as soon as our component loads, so we need to use useEffect
    useEffect(()=> {
        searchMovies("shark");
    },[]);

    const movie={Title: 'Shark Attack 3: Megalodon', Year: '2002', imdbID: 'tt0313597', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTIxODk2NDc5MF5BMl5BanBnXkFtZTcwNTY3NDUxMQ@@._V1_SX300.jpg'}

    return (
        <div className="app">
            <h1>Movie Land </h1>
            <div className="search">
                <input
                 placeholder="Search for movies"
                 value="Superman"
                 onChange={()=>{}}
                />
                <img 
                 src={SearchIcon}
                 alt="search"
                 onClick={() =>{}}
                 />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster!=='N/A' ?  movie.Poster : 'https://via.placholder.com/400'} alt={movie.Title}/>
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default App;