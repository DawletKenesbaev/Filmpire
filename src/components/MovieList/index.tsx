import axios, { AxiosRequestConfig } from 'axios';
import { Grid, Grow, Rating, Tooltip, Typography } from "@mui/material"
import { useEffect, useState } from 'react';
import useStyles from  './style'
import { Link } from 'react-router-dom';

 interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


const MovieList = () => {
  const classes = useStyles()
  const [data, setData] = useState<{ results: Movie[] } | null>(null); // Specify the type of data state  
  useEffect(() => {     
  const options: AxiosRequestConfig = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWExMGJhNTJkZDExYTg5ZTFiMzVjZThiZTYyMTQzYSIsInN1YiI6IjY1ZDcwNWUyMjdkYjYxMDE0YTQ0N2U1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.THOr8viWHo3EYJvYbC9V27jmWHVRMOO3JRV6svtgMqQ'
      }
    };
        axios
      .request(options)
      .then(function (response) {
        // Handle the successful response
        setData(response.data)
      })
      .catch(function (error) {
        // Handle errors
        console.error(error);
      });
  }, [])
  
  return (
    <Grid className={classes.moviesContainer} container>
         {data && data.results.map((item: Movie,index) => (
        <Grid item xs={12} sm={6}  md={4} lg={3}  xl={2} className={classes.movie} key={item.id}>
          <Grow in key={index} timeout={(index)*200}>
             <Link className={classes.links} to={`/movie/${item.id}`}>
                <img alt={item.title} className={classes.image} src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`: 'https://www.fillmurray.com/200/300'} />
                <Typography className={classes.title} variant='h5'> 
                {item.original_title}
                </Typography>
                <Tooltip disableTouchListener  title={`${item.vote_average} /10`}>
                    <div>
                      <Rating readOnly value={item.vote_average /2} precision={0.1} />
                    </div>
                </Tooltip>
             </Link>
          </Grow> 
        </Grid>
      ))}
    </Grid>
  )
}

export default MovieList