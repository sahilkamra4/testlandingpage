import React,{useEffect} from "react"
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import { useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography";
// import Image from "gatsby-image"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
   
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'green',
      height:'10px !important'
    },
    height:"100px"
  },
  mainbody:{
    marginTop:"40px",
    [theme.breakpoints.down('xs')]: {
      marginTop:"40px",
    },
  },
  bannerfont:{
    fontSize:"18px",
    [theme.breakpoints.down('xs')]: {
      fontSize:"14px",
    },
    // "&:active":{
    //   backgroundColor:"rgb(0,0,0,0.6)"
    // }
    

  },
  bannerTitle:{
    [theme.breakpoints.down('xs')]: {
      display:"none",
      
    },
  },
  bannerTitlePhone:{
    display:'none',
    [theme.breakpoints.down('xs')]: {
      display:'inline-block',
      paddingLeft:"2px"
    },
  },
  linkbutton:{
    // "&:hover":{
    //   backgroundColor:"red"
    // },
    "&:active":{
      backgroundColor:"green"
    }
  }
  ,
  links:{
    justifyContent:"flex-end",
    [theme.breakpoints.down('xs')]: {
      justifyContent:"center",
      // alignItem:"center"
    },
    [theme.breakpoints.down(300)]: {
      justifyContent:"flex-start",
      alignItem:"center"
    },
  }
}));


const Layout = ({ location, title, children }) => {

 
  const rootPath = `${__PATH_PREFIX__}/`
  const classes=useStyles()
  let header

  if (location.pathname === rootPath) {
    header = (
      // <h3
      //   style={{
      //     // ...scale(1.5),
      //     // marginBottom: rhythm(1.5),
      //     marginTop: 0,
      //     marginBottom:0,
      //     color:"black",
      //     whiteSpace:"nowrap"
      //   }}
      // >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `black`,
            fontSize:'1.988em',
            fontWeight:"bold",
            whiteSpace:"nowrap",
            // background:"green"
          }}
          to={`/`}
        >
        <h3 style={{marginTop:0,marginBottom:0}}>{title}</h3> 
        </Link>
      // </h3>
    )
  } else {
    header = (
      // <h3
      //   style={{
      //     fontFamily: `Montserrat, sans-serif`,
      //     // marginTop: 0,
      //     verticalAlign:"middle"
      //   }}
      // >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            // color: `red`,
            whiteSpace:"nowrap"
          }}
          to={`/`}
        >
         <h3 style={{marginTop:0,marginBottom:0}}>{title}</h3> 
          </Link>
      // </h3>
    )
  }

  useEffect(()=>{
    console.log(document.getElementById("header").style.height )
    const windowGlobal = typeof window !== 'undefined' && window
    windowGlobal.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if ((document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) && document.body.clientWidth>600) {
        // console.log("scrolling")
       
        document.getElementById("header").style.height = "80px";
      
      }
        
      else {
        // console.log("decreased scrolling")
       
        
        document.getElementById("header").style.height = "100px";
         
      
    }
  }
    
  })

const preventDefault = event => event.preventDefault();
  return (
    <div>
      
<header  style={{background:"",}}>

<AppBar elevation={0} id="header" className={classes.root} position="fixed" style={{transition:"0.2s",background:"white",elevation:0}}>
        <Toolbar style={{background:"white",maxWidth:"850px",margin:"auto",width:"100%",marginBottom:"0px"}}>
        
{/*     
           <Link to="/" className={classes.bannerTitle} style={{whiteSpace:"nowrap",
           textDecoration:"none",boxShadow:"none",
           color:"#333",
           fontSize:"1.2rem",}}>
             Sahil Kamra
           </Link>  */}
        {header}
           <Link to="/" className={classes.bannerTitlePhone} style={{whiteSpace:"nowrap",
           textDecoration:"none",boxShadow:"none",
           color:"#333",
           fontSize:"1.2rem",}}>
             SK
           </Link> 
      
           <div className={classes.links} style={{display:"flex", marginLeft:"0px",
         width:"100%",
          background:"",
          color:"black",
          whiteSpace:"nowrap",
          overflow:"hidden"}}>
        
          
           <div > 
           {/* <Button style={{fontSize:"1.2rem"}} className={classes.linkbutton} selected={true}>
             
             <Link to="/about" className={classes.bannerfont} style={{
             textTransform:"none",
             textDecoration:"none",
             boxShadow:"none",
              paddingLeft:"10px",
             padding:"0.1em",
            
             margin:"0 0.2rem",color:"rgb(0,0,0,0.6"}}>
              About me
            </Link>
               </Button> */}
               <Button component={Link} to="/about" activeStyle={{background:"rgba(0, 0, 0, 0.04)"}} 
                style={{
                  textTransform:"none",
                  textDecoration:"none",
                  boxShadow:"none",
                   paddingLeft:"10px",
                  padding:"0.5em",
                  fontSize:"16px",
                  margin:"0 0.2rem",color:"rgb(0,0,0,0.6"
                }}
                >
                About me
               </Button>
               <Button component={Link} to="/musings" activeStyle={{background:"rgba(0, 0, 0, 0.04)"}} 
                style={{
                  textTransform:"none",
                  textDecoration:"none",
                  boxShadow:"none",
                   paddingLeft:"10px",
                  padding:"0.5em",
                  fontSize:"16px",
                  margin:"0 0.2rem",color:"rgb(0,0,0,0.6"
                }}
                >
              Musings
               </Button>
          
             
               <Button component={Link} to="/contact" activeStyle={{background:"rgba(0, 0, 0, 0.04)"}} 
                style={{
                  textTransform:"none",
                  textDecoration:"none",
                  boxShadow:"none",
                   paddingLeft:"10px",
                  padding:"0.5em",
                  fontSize:"16px",
                  margin:"0 0.2rem",color:"rgb(0,0,0,0.6"
                }}
                >
             Contact
               </Button>
          
           </div>
         
          
          </div>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

</header>
    <div
      className={classes.mainbody}
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        // background:"pink",
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
   
      <main style={{minHeight:400}}>{children}
      
      </main>
      <footer>
        © {new Date().getFullYear()}
        {` `}
        
      </footer>
    </div>
    </div>
  )
}

export default Layout
