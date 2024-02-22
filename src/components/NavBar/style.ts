import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
const drawerWidth = '240px'
export default makeStyles((theme:Theme) => ({
    root:{
      
    },
    toolbar:{
      height:'80px',
      display:'flex',
      justifyContent:'space-between',
      marginLeft:'240px',
      [theme.breakpoints.down('sm')]:{
        marginLeft:'0',
        flexWrap:'wrap'
      }
    },
    menuButton:{
      marginRight:theme.spacing(2),
      [theme.breakpoints.up('sm')]:{
        display:'none'
      }
    },
    LinkButton: {
      '&:hover' : {
        color: 'white !important',
        textDecoration:'none'
      }
    },
    drawer: {
      [theme.breakpoints.up('sm')]:{
        width:drawerWidth,
        flexShrink:0
      }
    },
    drawerBg: {

    },
    drawerPaper:{
      width:drawerWidth
    }

}));