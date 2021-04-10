import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Rating } from 'semantic-ui-react'
import "./Review.css"

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {
  dialogPaper: {
      minHeight: '80vh',
      maxHeight: '80vh',
  },
};

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

   
    this.state = {
      open1: true,
      open2: false,
      open3: false,
      rating: 0,
      review: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (e, newRating) => {
    this.setState({ rating: newRating });
  };
  


  handleChange = (e) => this.setState({ rating: e.target.value })
  handleChange1 = (e) => this.setState({ review: e.target.value })



  handleSubmit = (e) => {
    alert('A name was submitted: ' + this.state.review);
    e.preventDefault();
  }

  handleClickOpen = () => {
    this.setState({ open1: true });
  };

  handleClose = () => {
    this.setState({ open1: false });
  };

  openSecond = () => {
    this.setState({ open2: true });
  };

  openThird = () => {
    this.setState({ open3: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleClose3 = () => {
    this.setState({ open3: false });
  };

  sendBackData = () => {
    this.props.parentCallback([this.state.rating,this.state.review]);
}



  render() {
    const { rating } = this.state

    
    return (
      <div>
           
        
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          dialogPaper= {{
            width: '700px',
            height: '800px',
        }}
        // fullWidth={true}
        // fullHeight={true}
        // maxWidth={'xl'}
        // maxHeight = {'md'}
          open={this.state.open1}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">  
          
                   
        <div style = {{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",

          color: "#150433"}} >        
          How was your shadowing experience with your host Rachel?
         </div>
          </DialogTitle>

          <DialogContent>
            <DialogContentText>
            <div style = {{color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16.2px",
            lineHeight: "163.35%"}}>
            How would you recommend the host to other shadowers? Tell shadowers and hosts what you liked and what you wish was different!
            </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions disabled style={{ textAlign: "center" }}> 
          
            <button className="later"
            onClick={this.handleClose}
            style={{color:"#5e239d",background:"#fcfcfc"}}>
              <a style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto" }}>
              LATER
              </a>
            </button>
            <button  className="startNow"
            style={{background:"#5e239d",color:"#fcfcfc"}}
            onClick={() => {
              // this.handleClose();
              this.openSecond();
            }} 
        
             >
               <a style={{background:"#5e239d",color:"#fcfcfc", textAlign:"center", margin:"auto"}}> START NOW</a>
            </button>
          </DialogActions>
          
        </Dialog>

        {this.state.open2?(
         
          <Dialog
          dialogPaper= {{
            width: '700px',
            height: '800px',
        }}
         
          BackdropProps={{ style: { backgroundColor: "transparent" } }}

          // fullWidth={true}
          // fullHeight={true}
          // maxWidth={'xl'}
          // maxHeight = {'md'}
          open={this.state.open2}
          // onClose={this.handleClose2}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> 
          <div style = {{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",

          color: "#150433"}} >      
          How likely are you to recommend the host to other shadowers?</div></DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
          
      <div className = "rating">
      
       
  
                
      <div class="row justify-content-md-center">
  
 

      <div className=' col col-md-2 ratingText'>  Not at all likely </div>
   
      <div className = "rating" >
        
              {/* <div>Rating: {rating}</div> */}
              <input
                type='range'
                min={0}
                max={5}
                value={rating}
                onChange={this.handleChange}
                
              />

   


            </div>

        {/* <Slider
        style = {{width: "50%"}}
        
        onChange={this.handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="discrete-slider"
      /> */}
       {/* <div>Rating: {rating}</div> */}
     
      


       
      
       
      <div className='col col-md-2 ratingText'>Extremely likely</div>
      </div>     
      </div>
       </DialogContent>

       <div class = "text-center">
       <pre>1   2   3   4   5</pre></div>
          <DialogActions disabled style={{ textAlign: "center" }}>
          <div class = "container">
       <div class = "text-center">
       
          <button className="later"
             onClick={() => {
              this.handleClose2();
              this.handleClickOpen();
            }} 
            style={{color:"#5e239d",background:"#fcfcfc"}}>
              <a style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto" }}>
              BACK
              </a>
            </button>
           
       
            
            <button className="later"
            onClick={() => {
              // this.handleClose2();
              this.openThird();
            }} 
            style={{color:"#5e239d",background:"#fcfcfc"}}>
              <a style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto" }}>
              NEXT
              </a>
            </button>
            
           
           </div>
          </div>
          </DialogActions>
        
        </Dialog>
          
          
          ):null}

        {this.state.open3?(
         <Dialog
        //  style={{width: '700px', marginLeft: '20%', backgroundColor: 'transparent'}}
        dialogPaper= {{
          width: '700px',
          height: '800px',
      }}
        //  fullWidth={true}
        //  fullHeight={true}
        //  maxWidth={'xl'}
        //  maxHeight = {'md'}
          open={this.state.open3}
          // onClose={this.handleClose3}
          aria-labelledby="form-dialog-title"

          BackdropProps={{ style: { backgroundColor: "transparent" } }}
        >
            <DialogTitle id="form-dialog-title">  
          
          <div style = {{
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "24px",
          lineHeight: "36px",
          textAlign: "center",

          color: "#150433"}} >        
          Write a review for your host!
          </div>
  </DialogTitle>
   
          <DialogContent>
            <DialogContentText>
            <div style = {{color: "#000000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16.2px",
            lineHeight: "163.35%"}}>
            Reviews are published after both you and your host have completed the reviews, or when the 14-day review period has ended.  
            </div>          
            </DialogContentText>
        
            {/* <TextField
              autoFocus
              margin="dense"
              id="name"
              // label="Email Address"
              type="text"
              fullWidth
              value={this.state.review}
              onChange={this.handleChange1}
            />  */}
            <TextField
              required
              // id="outlined-required"
              // label="Required"
              defaultValue="Hello World"
              variant="outlined"
              type="text"
              fullWidth
              value={this.state.review}
              onChange={this.handleChange1}
        />

          </DialogContent>
          <DialogActions>
          <button className="later"
            onClick={() => {
              this.handleClose3();
              this.openSecond();
            }} 
            style={{color:"#5e239d",background:"#fcfcfc"}}>
              <a style={{color:"#5e239d",background:"#fcfcfc", textAlign:"center", margin:"auto" }}>
              BACK
              </a>
            </button>
            
            
            <button  className="startNow"
            style={{background:"#5e239d",color:"#fcfcfc"}}
            onClick={() => {
              this.handleClose();
              this.handleClose2();
              this.handleClose3();
              this.sendBackData();
              this.props.postHostReviews();
             this.props.hostReviews.push({
               _id:2,
               author:"kathy",
               publishDate:"Mar 2021",
              body:this.state.review,
              rating:this.state.rating,
             
            })

           
            }}
        
             >
               <a style={{background:"#5e239d",color:"#fcfcfc", textAlign:"center", margin:"auto"}}>FINISH</a>
            </button>
          </DialogActions>
        </Dialog>
          
          
          ):null}
           
      </div>
    );
  }
}













