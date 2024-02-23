import { Dispatch, SetStateAction } from 'react';
import { Divider,List ,ListItem,ListItemText,ListSubheader,ListItemIcon, Theme, useTheme } from '@mui/material';
// import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
// import LiveTvIcon from '@mui/icons-material/LiveTv';
import useStyles from './styles'
const monkData =[
  {label:'Actions',value:'action'},
  {label:'Comdedy',value:'comedy'},
  {label:'Horror',value:'horror'},
  {label:'Animation',value:'animation'},

]
const categories =[
  {label:'Popular',value:'popular'},
  {label:'Top Rated',value:'top_rated'},
  {label:'Upcoming',value:'upcoming'},
]
interface Props {
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}
const redLogo ='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const blueLogo ='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'
const Sidebar = ({setMobileOpen}:Props) => {
  console.log(setMobileOpen);
  const theme:Theme = useTheme()
  const classes = useStyles()
  return (
    <> 
    <Link to='/' className={classes.ImgLink}>
       <img height={55} alt='Logo' src={theme.palette.mode === 'dark' ? redLogo : blueLogo}/>
    </Link>
    <Divider>
      <List>
        <ListSubheader>
          Categories
        </ListSubheader>
        {categories.map(({label,value}) => (
           <Link key={value} className={classes.Link} to='/'>
              <ListItem button>
                <ListItemIcon>
                  <img src={redLogo} className={classes.genreImg} height={30}/>
                </ListItemIcon>
                <ListItemText primary={label}/>  
              </ListItem>
           </Link>
        ))}
          <ListSubheader>
          Genres
        </ListSubheader>
           {monkData.map(({label,value}) => (
           <Link key={value} className={classes.Link} to='/'>
              <ListItem button>
                {/* <ListItemIcon>
                  <img src={redLogo} className={classes.genreImg} height={30}/>
                </ListItemIcon> */}
                <ListItemText primary={label}/>  
              </ListItem>
           </Link>
        ))}
      </List>
    </Divider>
    </>
  )
}

export default Sidebar