
/*jshint esversion: 6 */
import React from "react";
import { Helmet } from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import Footer from '../components/Footer'
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import "./Explore.css";
// import data from "../explore/data.json";
import Card from "../components/Card";
import mapImage from "../photos/map.png";
import searchArrow from "../photos/searchArrow.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExperienceDetail from '../explore/ExperienceDetail'
import { Button } from 'reactstrap';
import Fuse from 'fuse.js';


class Explore extends React.Component{



  componentDidMount() {
    this._isMounted=true
    this.setState
  }
  componentWillUnmount() {
    this._isMounted=false

  }

  static propTypes = {
    auth:PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    city: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this._isMounted=false
    let  cardArray=['something'];


    const { match, city, history } = this.props;

    this.state = {
      searchValue:'',
      cardArray:cardArray,
      currentData:{},
      currentFilteredData:{},
      data:{},
      valueFromSearch:'',
      industryFilters:[],
      durationDaysFilters:[],
      startDate: new Date(),
      endDate: new Date(),
      sortHTML:'Sort By',
      sortSelection:'N',
      match:match,

    }


     fetch('/api/experience/', {
        method: 'get',
        headers: new Headers({
            'Content-Type':'application/json'
        }),
    }).then((response) => {

      response.json().then((data)=>{
            console.log(data)
            this.setState({
                currentData:JSON.parse(JSON.stringify(data)),
                currentFilteredData:JSON.parse(JSON.stringify(data)),
                data:JSON.parse(JSON.stringify(data))

            })
      })
    }).catch((err) => {
              console.log(err)

    });





  }


  handleChange1 = date => {
  this.setState({
    startDate: date
  },()=>this.filter());


  };
  handleChange2 = date => {
  this.setState({
    endDate: date
  },()=>this.filter());

  };





  filter=()=>{

      let filteredData=this.state.currentData

      if(this.state.industryFilters.length!==0){


      filteredData= filteredData.filter(dataElement => {
            let bool=false
              this.state.industryFilters.forEach(industry=>{

                  if(dataElement.industry.includes(industry)){
                    bool=true;
                  }
              })

              return bool;

      })

      }

      if(this.state.durationDaysFilters.length!==0){


      filteredData= filteredData.filter(dataElement => {

            let bool=false
              this.state.durationDaysFilters.forEach(durationDays=>{
                   if(durationDays>3 &&  dataElement.durationDays>2   ){
                     bool=true
                   }
                   else if(dataElement.durationDays==durationDays){
                    bool=true;
                  }
              })

              return bool;

      })

      }
      let startDate=this.state.startDate
      let endDate=this.state.endDate
      filteredData= filteredData.filter((dataElement) => {

            let bool=false
            console.log(startDate)
            console.log(endDate)
            let from=new Date(dataElement.availableFrom)
            let to=new Date(dataElement.availableTill)
            if(from.getTime()>=startDate.getTime() &&endDate.getTime()>=to.getTime()){
                console.log('dates true')
               bool=true
            }


              return bool;

      })





      if(this.state.sortSelection.localeCompare('L')===0){
        this.sortByKeyL(filteredData, 'price')
      }else if(this.state.sortSelection.localeCompare('H')===0){
        this.sortByKeyH(filteredData, 'price')
      }
      let cardArray2=[]
      let match=this.state.match
      for(var i=0; i<filteredData.length;i+=2){
          if(i+1<filteredData.length){
          cardArray2.push(
           <Link to={`${match.url}/`+filteredData[i].id}>
          <div className="row " >

          <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
          <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
          {console.log(filteredData[i].image)}
          </div>


          <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
          <Card image={filteredData[i+1].image} id={filteredData[i+1].id} city={filteredData[i+1].city} profession={filteredData[i+1].profession} price={filteredData[i+1].price} durationDays={filteredData[i+1].durationDays}/>
          </div>

          </div>
          </Link>
          );

          }else{
            cardArray2.push(
            <Link to={`${match.url}/1`}>
            <div className="row ">
            <div className="card col-lg-4  offset-lg-1 ">
            <div className=''>
            <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
            </div>
            </div>

            </div>
            </Link>

           );
          }


      }
        // Then we use that to set the state for list
        this.setState({
          cardArray: cardArray2,
          currentFilteredData:filteredData

        });


  }

  updateIndustryFilters=(e)=>{
    if(e.target.classList.contains('disabled')){
      console.log(e.target.classList)
      e.target.classList.remove('disabled')
      console.log(e.target.classList)

    }else{
      e.target.classList.add('disabled')
      console.log(e.target.classList)

    }
    var found=false
    let tempArr=this.state.industryFilters
    tempArr.forEach((filter,i)=>{
        if (filter.localeCompare(e.target.innerHTML.substring(0,1))===0){
          console.log("here")
            found=true
            tempArr.splice(i,1)
        }
    })
    if(found===false){
       tempArr.push(e.target.innerHTML.substring(0,1))
    }
    this.setState({industryFilters:tempArr}, ()=> {this.filter()})


  }


   sortByKeyL(array, key) {
        return array.sort(function(a, b) {
          console.log(a)
            var x = parseInt(a[key].substring(1,)); var y = parseInt(b[key].substring(1,));
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
  }
  sortLow=()=>{
    let filteredData=this.state.currentFilteredData

      this.sortByKeyL(filteredData, 'price');


      let cardArray2=[]
      let match=this.state.match
      for(var i=0; i<filteredData.length;i+=2){
          if(i+1<filteredData.length){
          cardArray2.push(
           <Link to={`${match.url}/`+filteredData[i].id}>
          <div className="row " >

          <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
          <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
          {console.log(filteredData[i].image)}
          </div>


          <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
          <Card image={filteredData[i+1].image} id={filteredData[i+1].id} city={filteredData[i+1].city} profession={filteredData[i+1].profession} price={filteredData[i+1].price} durationDays={filteredData[i+1].durationDays}/>
          </div>

          </div>
          </Link>
          );

          }else{
            cardArray2.push(
            <Link to={`${match.url}/1`}>
            <div className="row ">
            <div className="card col-lg-4  offset-lg-1 ">
            <div className=''>
            <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
            </div>
            </div>

            </div>
            </Link>

           );
          }


      }




        this.setState({

          cardArray: cardArray2,
          sortHTML:'Price: Low to High',
          sortSelection:'L'

        });




  }

   sortByKeyH(array, key) {
        return array.sort(function(a, b) {
          var x = parseInt(a[key].substring(1,)); var y = parseInt(b[key].substring(1,));
            return ((y < x) ? -1 : ((y > x) ? 1 : 0));
        });
  }

    sortHigh=()=>{
      let filteredData=this.state.currentFilteredData


        this.sortByKeyH(filteredData, 'price');

        let cardArray2=[]
        let match=this.state.match
        for(var i=0; i<filteredData.length;i+=2){
            if(i+1<filteredData.length){
            cardArray2.push(
             <Link to={`${match.url}/`+filteredData[i].id}>
            <div className="row " >

            <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
            <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
            {console.log(filteredData[i].image)}
            </div>


            <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
            <Card image={filteredData[i+1].image} id={filteredData[i+1].id} city={filteredData[i+1].city} profession={filteredData[i+1].profession} price={filteredData[i+1].price} durationDays={filteredData[i+1].durationDays}/>
            </div>

            </div>
            </Link>
            );

            }else{
              cardArray2.push(
              <Link to={`${match.url}/1`}>
              <div className="row ">
              <div className="card col-lg-4  offset-lg-1 ">
              <div className=''>
              <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
              </div>
              </div>

              </div>
              </Link>

             );
            }


        }



          this.setState({
            cardArray: cardArray2,
            sortHTML:'Price: High to Low',
            sortSelection:'H'


          });




    }


    sortUndo=()=>{


      let dataToUse=this.state.currentFilteredData
      this.filterIndustry()

      console.log(dataToUse)
      let cardArray2=[]
      let match=this.state.match
      for(var i=0; i<filteredData.length;i+=2){
          if(i+1<filteredData.length){
          cardArray2.push(
           <Link to={`${match.url}/`+filteredData[i].id}>
          <div className="row " >

          <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
          <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
          {console.log(filteredData[i].image)}
          </div>


          <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
          <Card image={filteredData[i+1].image} id={filteredData[i+1].id} city={filteredData[i+1].city} profession={filteredData[i+1].profession} price={filteredData[i+1].price} durationDays={filteredData[i+1].durationDays}/>
          </div>

          </div>
          </Link>
          );

          }else{
            cardArray2.push(
            <Link to={`${match.url}/1`}>
            <div className="row ">
            <div className="card col-lg-4  offset-lg-1 ">
            <div className=''>
            <Card image={filteredData[i].image} id={filteredData[i].id} city={filteredData[i].city} profession={filteredData[i].profession} price={filteredData[i].price} durationDays={filteredData[i].durationDays}/>
            </div>
            </div>

            </div>
            </Link>

           );
          }


      }

            this.setState({
              cardArray: cardArray2,
              sortHTML:'Sort By',
              sortSelection:'N'

            });

    }


    handleInputChange=(event)=> {

      const { name, value } = event.target;
      this.setState({
              [name]: value
      });
      console.log(this.state.searchValue);

   }

   search=()=>{
     var fuse = new Fuse(data, {
    keys: [
      'industry',
      'profession',
      'city'
    ]
    });

     const results = fuse.search(this.state.searchValue).map(result=> result.item);
     console.log(results)

     this.setState({currentData:results}, ()=>{this.filter()})

   }




   updateDurationFilters=(e)=>{
     if(e.target.classList.contains('disabled')){
       console.log(e.target.classList)
       e.target.classList.remove('disabled')
       console.log(e.target.classList)

     }else{
       e.target.classList.add('disabled')
       console.log(e.target.classList)

     }

     var found=false
     let tempArr=this.state.durationDaysFilters
     tempArr.forEach((filter,i)=>{
       if (filter===parseInt(e.target.innerHTML)){
             found=true
         }
     })
     if(found===false){
        tempArr.push(parseInt(e.target.innerHTML))
     }
     this.setState({durationDaysFilters:tempArr}, ()=> {this.filter()})
     console.log(tempArr)

   }


   displayAll=()=>{
     let results=[]
     let dataToDisplay=this.state.data
     let match=this.state.match
     for(var i=0; i<dataToDisplay.length;i+=2){
         if(i+1<dataToDisplay.length){
         results.push(
          <Link to={`${match.url}/`+dataToDisplay[i].id}>
         <div className="row " >

         <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
         <Card image={dataToDisplay[i].image} id={dataToDisplay[i].id} city={dataToDisplay[i].city} profession={dataToDisplay[i].profession} price={dataToDisplay[i].price} durationDays={dataToDisplay[i].durationDays}/>
         {console.log(dataToDisplay[i].image)}
         </div>


         <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
         <Card image={dataToDisplay[i+1].image} id={dataToDisplay[i+1].id} city={dataToDisplay[i+1].city} profession={dataToDisplay[i+1].profession} price={dataToDisplay[i+1].price} durationDays={dataToDisplay[i+1].durationDays}/>
         </div>

         </div>
         </Link>
         );

         }else{
           results.push(
           <Link to={`${match.url}/1`}>
           <div className="row ">
           <div className="card col-lg-4  offset-lg-1 ">
           <div className=''>
           <Card image={dataToDisplay[i].image} id={dataToDisplay[i].id} city={dataToDisplay[i].city} profession={dataToDisplay[i].profession} price={dataToDisplay[i].price} durationDays={dataToDisplay[i].durationDays}/>
           </div>
           </div>

           </div>
           </Link>

          );
         }


     }

     this.setState({cardArray:results, currentFilteredData:dataToDisplay})
   }

  render(){
    let results=[]
      if(this.state.cardArray.length===0){
        results.push(

          <div className='row h-100 offset-2 pb-5' >
            <div className='col-sm-12 my-auto' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"28px","lineHeight":"163.35%","display":"flex","alignItems":"center","textAlign":"center","color":"#150433"}}>
              <p> Oops, we couldn't find any matches </p>
            </div>
            <div className='col-sm-12 my-auto' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"normal","fontSize":"19.8px","lineHeight":"32px","display":"flex","alignItems":"center","textAlign":"center","color":"#150433"}}>
              <p> Please try searching with another filter or term </p>
            </div>
            <div className='col-sm-12 my-auto' style={{}} >
              <button onClick={this.displayAll} style={{"border":"2px solid #150433","boxSizing":"border-box","borderRadius":"36px",background:'white',"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"500","fontSize":"15.5px","lineHeight":"20px","display":"flex","alignItems":"center","letterSpacing":"2px","color":"#150433"}}> View All Experiences </button>
            </div>
          </div>

        )
      }else if(!this.state.cardArray.includes('something')){

        results=this.state.cardArray
      }
    return (
      <div>

        <Navbar className='mb-5' textColor={'black'} />

        <div className='mt-5'> </div>

          <div className=" row mt-3 pt-5 " style={{'marginTop':'10%'}}>
                <div className=" searchArea col-12" >
                    <div className="search">

                        <h1 className="pl-5 pt-4" style={{color:"white", fontSize:"200%", fontWeight:'500',"textTransform":"uppercase"}}>Start Your next Journey </h1>
                        <div class="input-group pt-2">
                            <input id="addInput" type="text" class="form-control" value={this.state.searchValue} name="searchValue" onChange={this.handleInputChange} placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button" onClick={this.search}>
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                        </div>


                        <div className='row pt-5 ' style={{paddingLeft:'5%'}}>
                                    <p className='col-lg-1 col-3 mt-3 ' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"16.6px","letterSpacing":"2px","textTransform":"uppercase","color":"#000000",background:'', padding:'0.1%'}}> Industry </p>
                                     <Button className='col-lg-1 col-3  mr-2' style={{background:"#c73abc"}}  onClick={(e)=> this.updateIndustryFilters(e)} >Education</Button>
                                      <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Engineering</Button>
                                       <Button className='col-lg-2 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Art and Design</Button>
                                        <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}  onClick={(e)=> this.updateIndustryFilters(e)} >Healthcare</Button>
                                         <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Food</Button>
                        </div>


                        <div className='row pt-5 ' style={{paddingLeft:'5%'}}>
                                    <p className='col-lg-1 col-3 mt-3' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"16.6px","letterSpacing":"2px","textTransform":"uppercase","color":"#000000",background:'', padding:'0.1%'}}> Duration </p>
                                     <Button className='col-lg-1 col-3  mr-2' style={{background:"#c73abc"}}  onClick={(e)=> this.updateDurationFilters(e)} >1 Day</Button>
                                      <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateDurationFilters(e)} >2 Days</Button>
                                       <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateDurationFilters(e)} >3 Days+</Button>
                        </div>


                          <div className='row pt-4 mt-4'>

                                <div className='col-lg-3 offset-1'>
                                  <label>
                                    <p style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"15.6px","lineHeight":"26px","letterSpacing":"2px","textTransform":"uppercase","color":"#000000",background:'', padding:'0.1%'}}>From:</p>
                                      <DatePicker
                                       selected={this.state.startDate}
                                       onChange={this.handleChange1}
                                     />
                                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                                      <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                  </label>
                                </div>

                                <div className='col-lg-3 col-sm-10 offset-sm-1 col-10 offset-1'>
                                  <label>
                                      <p style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"15.6px","lineHeight":"26px","letterSpacing":"2px","textTransform":"uppercase","color":"#000000",background:'', padding:'0.1%'}}>To:</p>

                                      <DatePicker
                                       selected={this.state.endDate}
                                       onChange={this.handleChange2}
                                     />
                                     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                                      <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                  </label>

                                </div>





                            </div>

                    </div>

                </div>



          </div>

          <div className='row pt-5'>


          <div className='col-lg-2' style={{marginLeft:'4%'}}>
              <div class="btn-group" >
                <button style={{background:"white", color:'black'}}  type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.state.sortHTML}
                </button>
                <div class="dropdown-menu" id="dd1">
                    <a className='dropdown-item' onClick={this.sortLow}> Price: Low to High </a>
                    <a className='dropdown-item' onClick={this.sortHigh}> Price: High to Low </a>
                    <a className='dropdown-item' onClick={this.sortUndo}> Undo Sorting </a>



                </div>
              </div>
          </div>

          </div>


                          <div className='pt-5' >
                          {results}
                          </div>

          <Footer/>





      </div>

    );



}
}

export default withRouter(Explore)
