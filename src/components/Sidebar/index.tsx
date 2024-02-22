import { Dispatch, SetStateAction } from 'react';
import { Divider,List ,ListItem,ListItemText,ListSubheader,ListItemIcon,Box,CircularProgress, Theme, useTheme } from '@mui/material';
// import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import useStyles from './styles'
interface Props {
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
}
const redLogo ='https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';
const blueLogo ='https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png'
const Sidebar = ({setMobileOpen}:Props) => {
  const theme:Theme = useTheme()
  const classes = useStyles()
  return (
    <> 
    <Link to='/' className={classes.ImgLink}>
       <img alt='Logo' src={theme.palette.mode === 'dark' ? redLogo : blueLogo}/>
    </Link>

    </>
  )
}

export default Sidebar