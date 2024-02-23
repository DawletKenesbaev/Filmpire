import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme:Theme) => ({
    ImgLink: {
      display:'flex',
      justifyContent:'center',
      padding:'10% 0 '
    },
    img : {
      width:'70%'
    },
    Link : {
      color:theme.palette.text.primary,
      textDecoration:'none'
    },
    genreImg:{
      filter: theme.palette.mode ==='dark' ? 'dark': 'invert(1)',
      
    },
}))