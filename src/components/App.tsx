import {Route,Routes} from 'react-router-dom'
import Actors from './Actors'
import Movies from './Movies'
import Navbar from './NavBar'
import Profile from './Profile'
import MovieInfo from './MovieInformation'

import {CssBaseline} from '@mui/material'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  console.log(process.env.REACT_APP_TMDB_KEY);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/'  element={<Movies />}/>
          <Route path='/movie/:id'  element={<MovieInfo />}/>
          <Route path='/profile/:id'  element={<Profile />}/>
          <Route path='/actors/:id'  element={<Actors />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App