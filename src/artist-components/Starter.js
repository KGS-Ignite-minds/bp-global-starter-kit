import PropTypes from 'prop-types';
// material-ui
import { Box, Card, Grid } from '@mui/material';
// project imports
import SubCard from './SubCard';
import { gridSpacing } from './constant';
import './Starter.css';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect, useRef } from "react";
import LandingPage from "../containers/landingPage";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Appform from './App_form'
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom'


import CardContent from '@mui/material/CardContent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({
  root: {
    // background: 'red',
    // border: 0,
    // borderRadius: 3,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // color: 'white',
    // height: 48,
    // padding: '0 30px',
    // background-image: `url("./../public/images/Landing-page.jpg")`
    // backgroundImage:`url("/images/react.jpeg")`,
    backgroundSize:`cover,`,
    height:'100%',
    
  },
});

const ShadowBox = ({ shadow,app }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  let img_url=`url("`+app.image+`")`;
  return (

    <>

      <Card   onClick={handleClickOpen} sx={{ mb: 3, boxShadow: shadow }}>
        <Box
          sx={{
         
            bgcolor: 'white',
            color: 'grey.800',
            height: '100px',
            cursor: 'pointer'

          }}
        >
          {/* <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box> */}
          <div className='wave-container'>
            <div>
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
              <Box className="box-card">
                <Avatar alt="Remy Sharp" sx={{ width: 65, height: 65 }} src={app.image} />
              </Box>
              <Box >
                <div className="cursive">Click to create <span className='name-app' ><u><b>{app.name}</b></u></span> app.</div>
              </Box>

            </div>
          </div>
        </Box>
      </Card>

      <Dialog
   
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
               Genrating {app.name} Boilerplate
            </Typography>
            <Button  variant="contained" autoFocus  onClick={handleClose}>
              Genrate {app.name} Template
            </Button>
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List> */}
         <Box    className={classes.root}   style={{backgroundImage: img_url,backgroundSize:`cover`,position:'relative',opacity:0.4}}>
          </Box>  
          <Appform/>  
       
      </Dialog>



    </>

  )
};

ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired
};





function Main() {

  const [applist, setAppList] = useState([
  {
     name:"Angular",
     image:"/images/angular.png",
     route:"form/angular-form"
  },
  {
    name:"React",
    image:"/images/react.jpeg",
    route:"form/react-form"
 },
 {
  name:"Vue",
  image:"/images/vue.png",
  route:"form/vue-form"
},
{
  name:"Node js",
  image:"/images/node.png",
  route:"form/node-form"
},
{
  name:"Python/Django",
  image:"/images/python.png",
  route:"form/django-form"
},
{
  name:".Net",
  image:"/images/dotnet.png",
  route:"form/dotnet-form"
},
{
  name:"CI/CD ",
  image:"/images/cicd.jpeg",
  route:"form/pipeline-form"
},
{
  name:"QA/Testing",
  image:"/images/test.jpeg",
  route:"form/testing-form"
},
{
  name:"Core Java",
  image:"/images/java.png",
  route:"form/java-form"
},

]);
  

  return (
    <>
    {/* <Card sx={{ minWidth: 275,margin:'20px 20px 20px 20px',background:'#fff;' }}>
      <CardContent> */}
       <div className='wrapper-boxx'>
       <div className='main-head-div'>
        <div className='head-tit'>
          <h3>Generate Starter Kit</h3>
          </div>
        
        </div>

        <hr className="new1"></hr>
    
   
      <Grid  style={{marginTop:'10px'}} container spacing={gridSpacing}>
        <Grid item xs={12}>

          {/* <SubCard  className='sub-tit' title="Basic Shadow"> */}
            <Grid container spacing={gridSpacing}>

              {applist.map(item=>(
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Link  style={{ textDecoration:'none'}} to={item.route}>
                <ShadowBox shadow="10" app={item} />
                </Link>
       
              </Grid>
              ))}
            </Grid>
          {/* </SubCard> */}

        </Grid>
      </Grid>

      </div> 
 
      {/* </CardContent>
      </Card>  */}

    </>)

}
export default Main;