import React,{ useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import  Logo  from './Assets/hero-section-illustration.svg';
import Modal from '@material-ui/core/Modal';


const Footer= () =>(
  
    <div className="footer" >
    <p>PT XYZ indonesia 2020</p>
    
  </div>
);

const loginModal =() =>(
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  {body}
</Modal>
)

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const useStyles = makeStyles((theme) => ({
  
  appBar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    background:'#EB414F',
    color:'white',   
    
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize:49,
    fontStyle:'Bold',
    
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize:35,
    color:'white',
  },
  heroContent: {
    padding: theme.spacing(0, 0, 6),
    
  },
  cardHeader: {
    backgroundColor:'#EB414F',

  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  pic : {
    marginTop:236,
    paddingLeft:948,
    paddingBottom:236,
    paddingRight:210,   
  },

  textinfo:{
    display: 'inline-flex',
    VerticalAlign: 'text-bottom',
    BoxSizing: 'inherit',
    textAlign: 'center',
    AlignItems: 'center',
    position:'absolute',
    fontSize:65,
    top:267,
    left:204,
    bottom:508,
    right:1091,
    textAlign:'left',
  },

}));



const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];


export default function Pricing() {
  const classes = useStyles();
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            xyzPOS
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Fitur
            </Link>
            <Link variant="button" color="textPrimary" onClick={executeScroll} className={classes.link}>
              Berlangganan
            </Link>
           
          </nav>
          <Button href="#" color="secondary" variant="outlined" className={classes.link} onClick={handleOpen}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      
      {/* Modal */}
    
      {/* Hero unit */}
    


    <Grid countainer direction="column">
      <Grid item>
        <img className={classes.pic}src={Logo}></img>
      </Grid>
        <Grid className={classes.textinfo}>
         Solusi terbaik untuk mengelola usaha kamu!
        </Grid>

    </Grid>
    
    <div ref={myRef}>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography  variant="h2" align="center" color="textPrimary" gutterBottom>
        Daftar sekarang dan nikmati fiturnya! 
        </Typography>
      
      </Container>
    </div>   
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className='btn'>
        <Grid container spacing={5} alignItems="flex-end" >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>g
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>x
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="secondary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
       
       <Footer>              
        <Box mt={2}>
         
        </Box>
        </Footer>                    
      {/* End footer */}
    </React.Fragment>
  );
}