import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Theme, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { getGenres } from '../../services/fetchData';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

interface Props {
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}

interface GenresProps {
  id: number;
  name: string;
}

const redLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const Sidebar = ({ setMobileOpen }: Props) => {
  const theme: Theme = useTheme();
  const classes = useStyles();
  const [genres, setGenres] = useState<GenresProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGenres({ url: '/genre/movie/list', method: 'GET' });
        setGenres(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Link to='/' className={classes.ImgLink}>
        <img height={55} alt='Logo' src={theme.palette.mode === 'dark' ? redLogo : blueLogo} />
      </Link>
      <Divider>
        <List>
          <ListSubheader>
            Categories
          </ListSubheader>
          {categories.map(({ label, value }) => (
            <Link key={value} className={classes.Link} to='/'>
              <ListItem button>
                <ListItemIcon>
                  <img src={redLogo} className={classes.genreImg} height={30} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </Link>
          ))}
          <ListSubheader>
            Genres
          </ListSubheader>
          {genres.map(({ id, name }) => (
            <Link key={id} className={classes.Link} to='/'>
              <ListItem button>
                <ListItemIcon>
                  <img src={redLogo} className={classes.genreImg} height={30} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Divider>
    </>
  );
}

export default Sidebar;
