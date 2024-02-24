import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
export default makeStyles((theme:Theme) => ({
    
   moviesContainer: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent:'space-between',
    overflow:'auto',
    [theme.breakpoints.down('sm')]:{
        justifyContent:'center'
    },
    
   } ,
   movie : {
    padding:'10px'
   },
   title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width:'230px',
    whiteSpace:'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom:'0'
   },
   links: {
    textDecoration:'none',
    alignItems:'center',
    fontWeight:'bold',
    [theme.breakpoints.up('xs')]:{
      display:'flex',
      flexDirection:'column'
    },
    '&:hover': {
        cursor:'pointer',
    }

   },
   image: {
     borderRadius: '20px',
     height:'300px',
     marginBottom:'10px',
     transition: '0.3s',
     '&:hover': {
        transform:'scale(1.05)'
    }
   }
}));