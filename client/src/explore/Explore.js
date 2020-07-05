
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
import data from "../explore/data.json";
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
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props)
    this._isMounted=false
    let  cardArray=[];


    const { match, location, history } = this.props;


    this.state = {
      searchValue:'',
      cardArray:cardArray,
      currentData:JSON.parse(JSON.stringify(data)),
      data:JSON.parse(JSON.stringify(data)),
      valueFromSearch:'',
      industryFilters:[],
      startDate: new Date(),
      endDate: new Date(),
      sortHTML:'Sort By',
      sortSelection:'N',
      match:match
    }
    this.filterIndustry = this.filterIndustry.bind(this);

    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        cardArray.push(
         <Link to={`${match.url}/`+data[i].id}>
        <div className="row " >

        <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
        <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>


        <div className="card col-lg-4  offset-lg-1 " style={{padding:'2%'}}>
        <Card image={data[i+1].image} id={data[i+1].id} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>

        </div>
        </Link>
        );

        }else{
          cardArray.push(
          <Link to={`${match.url}/1`}>
          <div className="row ">
          <div className="card col ">
          <div className=''>
          <Card image={data[i].image} id={data[i].id} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>

          </div>
          </Link>

         );
        }


    }

  }


  handleChange1 = date => {
  this.setState({
    startDate: date
  });
  };
  handleChange2 = date => {
  this.setState({
    endDate: date
  });
  };
  // displaycardArray(e){
  //     // Prevent button click from submitting form
  //    e.preventDefault();
  //
  //    // Create variables for our list, the item to add, and our form
  //    let cardArray = this.state.cardArray;
  //    const newItem = document.getElementById("addInput");
  //    const form = document.getElementById("addItemForm");
  //
  //    // If our input has a value
  //    if (newItem.value != "") {
  //      // Add the new item to the end of our list array
  //      list.push(newItem.value);
  //      // Then we use that to set the state for list
  //      this.setState({
  //        list: list
  //      });
  //      // Finally, we need to reset the form
  //      newItem.classList.remove("is-danger");
  //      form.reset();
  //    } else {
  //      // If the input doesn't have a value, make the border red since it's required
  //      newItem.classList.add("is-danger");
  //    }
  // }



  filterIndustry(){
    //Prevent button click from submitting form
    //  e.preventDefault();
      // Create variables for our list, the item to add, and our form

      // const targetId = e.target.id;
      // let newItem=document.getElementById(targetId).innerHTML
      // console.log(newItem)

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

      if(this.state.sortSelection.localeCompare('L')===0){
        this.sortByKeyL(filteredData, 'price')
      }else if(this.state.sortSelection.localeCompare('H')===0){
        this.sortByKeyH(filteredData, 'price')
      }
      let cardArray2=[]
      for(var i=0; i<filteredData.length;i+=2){
          if(i+1<filteredData.length){
          cardArray2.push(
          <div className="row " >

          <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
          <Card image={filteredData[i].image} id={filteredData[i].id} location={filteredData[i].location} profession={filteredData[i].profession} price={filteredData[i].price} duration={filteredData[i].duration}/>
          {console.log(filteredData[i].image)}
          </div>


          <div className="card col-lg-4 offset-lg-1 " style={{padding:'2%'}}>
          <Card image={filteredData[i+1].image} id={filteredData[i+1].id} location={filteredData[i+1].location} profession={filteredData[i+1].profession} price={filteredData[i+1].price} duration={filteredData[i+1].duration}/>
          </div>

          </div>);

          }else{
            cardArray2.push(
            <div className="row ">
            <div className="card col ">
            <div className=''>
            <Card image={filteredData[i].image} id={filteredData[i].id} location={filteredData[i].location} profession={filteredData[i].profession} price={filteredData[i].price} duration={filteredData[i].duration}/>
            </div>
            </div>

            </div>)
          }
      }
        // Then we use that to set the state for list
        this.setState({
          cardArray: cardArray2
        });
        console.log('filtered')

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
        if (filter.localeCompare(e.target.innerHTML)===0){
          console.log("here")
            found=true
            tempArr.splice(i,1)
        }
    })
    if(found===false){
       tempArr.push(e.target.innerHTML)
    }
    this.setState({industryFilters:tempArr, displayFiltered:true})

    this.filterIndustry()

  }


   sortByKeyL(array, key) {
        return array.sort(function(a, b) {
          console.log(a)
            var x = parseInt(a[key].substring(1,)); var y = parseInt(b[key].substring(1,));
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
  }
  sortLow=()=>{
    let dataToSort=this.state.currentData

      this.sortByKeyL(dataToSort, 'price');


      let cardArray2=[]
      for(var i=0; i<dataToSort.length;i+=2){
          if(i+1<dataToSort.length){
          cardArray2.push(
          <div className="row " >

          <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
          <Card image={dataToSort[i].image} id={dataToSort[i].id} location={dataToSort[i].location} profession={dataToSort[i].profession} price={dataToSort[i].price} duration={dataToSort[i].duration}/>
          {console.log(dataToSort[i].image)}
          </div>


          <div className="card col-lg-4 offset-lg-1 " style={{padding:'2%'}}>
          <Card image={dataToSort[i+1].image} id={dataToSort[i+1].id} location={dataToSort[i+1].location} profession={dataToSort[i+1].profession} price={dataToSort[i+1].price} duration={dataToSort[i+1].duration}/>
          </div>

          </div>);

          }else{
            cardArray2.push(
            <div className="row ">
            <div className="card col ">
            <div className=''>
            <Card image={dataToSort[i].image} id={dataToSort[i].id} location={dataToSort[i].location} profession={dataToSort[i].profession} price={dataToSort[i].price} duration={dataToSort[i].duration}/>
            </div>
            </div>

            </div>)
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
      let dataToSort=this.state.currentData


        this.sortByKeyH(dataToSort, 'price');


        let cardArray2=[]
        for(var i=0; i<dataToSort.length;i+=2){
            if(i+1<dataToSort.length){
            cardArray2.push(
            <div className="row " >

            <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
            <Card image={dataToSort[i].image} id={dataToSort[i].id} location={dataToSort[i].location} profession={dataToSort[i].profession} price={dataToSort[i].price} duration={dataToSort[i].duration}/>
            {console.log(dataToSort[i].image)}
            </div>


            <div className="card col-lg-4 offset-lg-1 " style={{padding:'2%'}}>
            <Card image={dataToSort[i+1].image} id={dataToSort[i+1].id} location={dataToSort[i+1].location} profession={dataToSort[i+1].profession} price={dataToSort[i+1].price} duration={dataToSort[i+1].duration}/>
            </div>

            </div>);

            }else{
              cardArray2.push(
              <div className="row ">
              <div className="card col ">
              <div className=''>
              <Card image={dataToSort[i].image} id={dataToSort[i].id} location={dataToSort[i].location} profession={dataToSort[i].profession} price={dataToSort[i].price} duration={dataToSort[i].duration}/>
              </div>
              </div>

              </div>)
            }
        }



          this.setState({
            cardArray: cardArray2,
            sortHTML:'Price: High to Low',
            sortSelection:'H'


          });




    }


    sortUndo=()=>{


      let dataToUse=this.state.currentData
      this.filterIndustry()

      console.log(dataToUse)
          let cardArray2=[]
          for(var i=0; i<dataToUse.length;i+=2){
              if(i+1<dataToUse.length){
              cardArray2.push(
              <div className="row " >

              <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
              <Card image={dataToUse[i].image} id={dataToUse[i].id} location={dataToUse[i].location} profession={dataToUse[i].profession} price={dataToUse[i].price} duration={dataToUse[i].duration}/>
              {console.log(dataToUse[i].image)}
              </div>


              <div className="card col-lg-4 offset-lg-1 " style={{padding:'2%'}}>
              <Card image={dataToUse[i+1].image} id={dataToUse[i+1].id} location={dataToUse[i+1].location} profession={dataToUse[i+1].profession} price={dataToUse[i+1].price} duration={dataToUse[i+1].duration}/>
              </div>

              </div>);

              }else{
                cardArray2.push(
                <div className="row ">
                <div className="card col ">
                <div className=''>
                <Card image={dataToUse[i].image} id={dataToUse[i].id} location={dataToUse[i].location} profession={dataToUse[i].profession} price={dataToUse[i].price} duration={dataToUse[i].duration}/>
                </div>
                </div>

                </div>)
              }
          }

          if(this.state.displayFiltered){
            this.setState({
              filteredCards: cardArray2,
              sortHTML:'Sort By',
              sortSelection:'N'


            });
          }else{
            this.setState({
              cardArray: cardArray2,
              sortHTML:'Sort By'

            });
          }
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
      'location'
    ]
    });

     const results = fuse.search(this.state.searchValue).map(result=> result.item);
     console.log(results)

     this.setState({currentData:results}, ()=>{this.filterIndustry()})
     

     // results=this.state.currentData
     //
     // let cardArray2=[]
     // for(var i=0; i<results.length;i+=2){
     //     if(i+1<results.length){
     //     cardArray2.push(
     //     <div className="row " >
     //
     //     <div className="card col-lg-4 offset-lg-1" style={{padding:'2%'}}>
     //     <Card image={results[i].image} id={results[i].id} location={results[i].location} profession={results[i].profession} price={results[i].price} duration={results[i].duration}/>
     //     {console.log(results[i].image)}
     //     </div>
     //
     //
     //     <div className="card col-lg-4 offset-lg-1 " style={{padding:'2%'}}>
     //     <Card image={results[i+1].image} id={results[i+1].id} location={results[i+1].location} profession={results[i+1].profession} price={results[i+1].price} duration={results[i+1].duration}/>
     //     </div>
     //
     //     </div>);
     //
     //     }else{
     //       cardArray2.push(
     //       <div className="row ">
     //       <div className="card col ">
     //       <div className=''>
     //       <Card image={results[i].image} id={results[i].id} location={results[i].location} profession={results[i].profession} price={results[i].price} duration={results[i].duration}/>
     //       </div>
     //       </div>
     //
     //       </div>)
     //     }
     // }
     //
     //   this.setState({
     //     cardArray: cardArray2
     //
     //   });





   }
  render(){

    return (
      <div>

        <Navbar className='mb-5' textColor={'black'} />

        <div className='mt-5'> </div>

          <div className=" row mt-3 pt-5 " style={{'marginTop':'10%'}}>
                <div className=" searchArea col-12" >
                    <div className="search">
                        <h1 className="pl-5 pt-4" style={{color:"white", fontSize:"200%", fontWeight:'800'}}>Start Your next Journey </h1>
                        <div class="input-group pt-2">
                            <input id="addInput" type="text" class="form-control" value={this.state.searchValue} name="searchValue" onChange={this.handleInputChange} placeholder="Search"/>
                            <div class="input-group-append">
                              <button class="btn btn-secondary" type="button" onClick={this.search}>
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                        </div>


                        <div className='row pt-5 ' style={{paddingLeft:'5%'}}>
                                    <p className='col-lg-2 col-3 ' style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"15.6px","letterSpacing":"2px","textTransform":"uppercase","color":"#5E239D",background:'', padding:'0.1%'}}> Apply Industry Filters: </p>
                                     <Button className='col-lg-1 col-3  ml-3 mr-2' style={{background:"#c73abc"}}  onClick={(e)=> this.updateIndustryFilters(e)} >Education</Button>
                                      <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Engineering</Button>
                                       <Button className='col-lg-2 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Art and Design</Button>
                                        <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}  onClick={(e)=> this.updateIndustryFilters(e)} >Healthcare</Button>
                                         <Button className='col-lg-1 col-3  mr-2 ' style={{background:"#c73abc"}}   onClick={(e)=> this.updateIndustryFilters(e)} >Food</Button>
                        </div>


                        <div className='row pt-5'>


                              <div className='col-lg-2 offset-1'>
                                  <div class="btn-group">
                                    <button style={{background:'#F2C94C'}} type="button" id="bvAtt" class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      {this.state.sortHTML}
                                    </button>
                                    <div class="dropdown-menu" id="dd1">
                                        <a className='dropdown-item' onClick={this.sortLow}> Price: Low to High </a>
                                        <a className='dropdown-item' onClick={this.sortHigh}> Price: High to Low </a>
                                        <a className='dropdown-item' onClick={this.sortUndo}> Undo Sorting </a>



                                    </div>
                                  </div>
                              </div>


                              <div className='col-lg-3'>
                                <div class="btn-group">
                                  <button style={{background:'#F2C94C'}} type="button" id='bsAtt' class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                     Filter By Duration
                                  </button>
                                  <div class="dropdown-menu" id="dd2">
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Less than 3 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 3 to 5 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 5 to 7 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> 7 to 9 days </a>
                                      <a className='dropdown-item' onclick='filterDuration(event)'> Greater than 9 days </a>
                                  </div>
                                </div>
                              </div>


                          </div>
                          <div className='row pt-4 mt-4'>

                                <div className='col-lg-3 offset-1'>
                                  <label>
                                    <p style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"15.6px","lineHeight":"26px","letterSpacing":"2px","textTransform":"uppercase","color":"#5E239D",background:'', padding:'0.1%'}}>From:</p>
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
                                      <p style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"15.6px","lineHeight":"26px","letterSpacing":"2px","textTransform":"uppercase","color":"#5E239D",background:'', padding:'0.1%'}}>To:</p>

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

                          <div className='pt-5' >
                          {this.state.cardArray}
                          </div>

          <Footer/>





      </div>

    );



}
}

export default withRouter(Explore)
