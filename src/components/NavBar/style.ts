import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

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

    }
}));