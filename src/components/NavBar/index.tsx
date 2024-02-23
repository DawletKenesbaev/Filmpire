import { AppBar, IconButton,Toolbar,Drawer,Button,Avatar,useMediaQuery} from '@mui/material';
import { Menu,AccountCircle,Brightness4,Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/styles';
import { Theme } from "@mui/material";

import useStyles from './style'
import { useState } from 'react';
import Sidebar from '../Sidebar';
const Navbar = () => {
  const classes = useStyles()
  const theme:Theme = useTheme()
  const isMobile =useMediaQuery('(max-width:600px)')
  const isLoged =true
  const [mobileOpen, setMobileOpen] = useState(false)
  
  return (
    <>
       <AppBar position='fixed'>
          <Toolbar className={classes.toolbar}>
             {isMobile && (
              <IconButton
              color='inherit'
              edge='start'
              style={{ outline:'none'}}
              className={classes.menuButton}
              onClick={() =>  setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              >
                <Menu />
              </IconButton>
             )}
             <IconButton color='inherit' sx={{ml:1}}>
              {
                theme.palette.mode ==='dark' ? <Brightness7 /> : <Brightness4 />
              }
             </IconButton>
             {!isMobile && 'Search....'}
             <div>
              {!isLoged ? (
                <Button color='inherit'>
                  Login &nbsp; <AccountCircle />
                </Button>
              ):(
                 <Button 
                 to={`/profile/123`}
                 component={Link}
                 color='inherit'
                 className={classes.LinkButton}
                 >
                  {!isMobile && <>My Movies &nbsp;</>}
                  <Avatar style={{width:'30px',height:'30px'}}
                  src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Favatar-icon-placeholder-facebook-1577909%2F&psig=AOvVaw0KbWNv6IYw_AAxPNS1urjD&ust=1708681672039000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNi87bHVvoQDFQAAAAAdAAAAABAE'
                   alt='profile'/>
                 </Button>
              )}
             </div>
          </Toolbar>
       </AppBar>
       <div>
           <nav className={classes.drawer}>
               {isMobile ? (
                <Drawer
                variant='temporary'
                anchor='right'
                open={mobileOpen}
                className={classes.drawerBg}
                classes={{paper:classes.drawerPaper}}
                ModalProps={{keepMounted:true}}
                onClose={() =>  setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                >
                  <Sidebar  setMobileOpen={setMobileOpen}/>
                </Drawer>
               ):(
                <Drawer classes={{paper:classes.drawerPaper}} variant='permanent' open>
                   <Sidebar  setMobileOpen={setMobileOpen}/>
                </Drawer>
               )}
           </nav>
       </div>
    </>
  )
}

export default Navbar