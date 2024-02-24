import action from './action.png'
import adventure from './adventure.png'
import animation from './animation.png';
import comedy from './comedy.png';
import crime from './crime.png';
import documentary from './documentary.png';
import drama from './drama.png';
import family from './family.png';
import fantasy from './fantasy.png';
import history from './history.png';
import horror from './horror.png';
import music from './music.png';
import mystery from './mystery.png';
import romance from './romance.png';
import scienceFiction from './science_fiction.png';
import tvMovie from './tv_movie.png';
import thriller from './thriller.png';
import war from './war.png';
import western from './western.png';
import popular from './popular.png';
import upcoming from './upcoming.png'
import topRated from './top_rated.png'
type GenreIcons = {
    [key: string]: string; // Allow any string key with string value
}

const genreIcons: GenreIcons = {
    action,
    adventure,
    animation,
    comedy,
    crime,
    documentary,
    drama,
    family,
    fantasy,
    history,
    horror,
    music,
    mystery,
    romance,
    'science fiction': scienceFiction,
    'tv movie': tvMovie,
    thriller,
    war,
    western,
    popular,
    upcoming,
    'top_rated':topRated
};


export default genreIcons;