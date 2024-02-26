import axios, { AxiosRequestConfig } from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface Props {
  method: string;
  url: string;
}

export const getGenres = ({ method, url }: Props): Promise<Genre[]> => {
  const options: AxiosRequestConfig = {
    method: method,
    url: `https://api.themoviedb.org/3${url}?language=en`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWExMGJhNTJkZDExYTg5ZTFiMzVjZThiZTYyMTQzYSIsInN1YiI6IjY1ZDcwNWUyMjdkYjYxMDE0YTQ0N2U1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.THOr8viWHo3EYJvYbC9V27jmWHVRMOO3JRV6svtgMqQ'
    }
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.genres;
    })
    .catch(function (error) {
      console.error(error);
      return []; // Return empty array in case of error
    });
};

import { CreateApi } from '@reduxjs/toolkit/query';
