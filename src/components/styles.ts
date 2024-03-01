import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
// change to Tailwind css
export default makeStyles((theme:Theme) => ({
    root:{
      width:'100%'
    },
    toolbar:{
        height:'70px'

    },
    content: {
       flexGrow:'1',
       padding:'2em',
       marginLeft:'240px',
       [theme.breakpoints.down('sm')]:{
        marginLeft:'0',
      }
    }
}));