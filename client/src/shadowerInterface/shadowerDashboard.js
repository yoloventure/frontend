import React, {createRef} from "react";
import Navbar from "../components/navbar";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import moment from "moment";
import {Button} from "reactstrap"

import hostRequests from './hostRequests.json'
import hostReviews from './hostReviews.json'
import reviewShadowerNotifications from './reviewShadowerNotifications.json'

import 'react-calendar/dist/Calendar.css';
import ShowMoreText from 'react-show-more-text';
import './shadowerDashboard.css'

import {
  Link
} from "react-router-dom";

import {MDBIcon, MDBBtn} from 'mdbreact'


class Dashboard extends React.Component{


  constructor(props){
    super(props)
    this.Ref = createRef()
    const { match, location, history } = this.props;


      //setup host requests
      let tempArray=[]
        hostRequests.forEach(request=>{
          tempArray.push(
            <div className='row mt-3' style={{"boxShadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                      <div className='col-9 offset-1'>
                            <h3 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"600","fontSize":"80%","lineHeight":"22px","letterSpacing":"0.01em"}}> {request.fname} accepted my shadowing request </h3>
                      </div>
                      <div className='col-2'>
                            <p> {request.timeStamp}</p>
                      </div>
                      <div className='col-11 offset-1'>
                            <ShowMoreText
                            /* Default options */
                               lines={1}
                               more='+more'
                               less='-less'
                               anchorClass='moreClass'
                               onClick={this.executeOnClick}
                               expanded={false}
                               width={280}
                               color='black'

                           >
                              <p>{request.requestContent}</p>
                          </ShowMoreText>
                       </div>
                      <div className='col-1 offset-1'>
                         <img src='http://via.placeholder.com/30x30' style={{borderRadius:'50%'}} />
                      </div>
                        <div className='col-3' >
                              <p
                              >
                               {request.fname}
                               </p>
                        </div>
                        <div className='col-3 offset-4'>


                              <button style={{width:"100%" ,"background":"#F7685B","borderRadius":"4px",border:'transparent', fontSize:'90%',color:'white'}}> Reply </button>

                       </div>
            </div>
          )
        })

        //setup review notifications
        let tempArray2=[]
        reviewShadowerNotifications.forEach(notification=>{
          tempArray2.push(
            <div className='row mt-3' style={{"boxShadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                      <div className='col-6 offset-1'>
                            <h3 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"600","fontSize":"80%","lineHeight":"22px","letterSpacing":"0.01em"}}> {notification.fname} wrote me a review </h3>
                      </div>
                      <div className='col-4 offset-1'>
                            <p> {notification.reviewDate}</p>
                      </div>
                        <div className='col-4 offset-1' >
                              <h5 style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}>Shadowing Dates: </h5>
                        </div>
                        <div className='col-6 '>


                              <h5 style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}> {notification.shadowStartDate} - {notification.shadowEndDate} </h5>

                        </div>



                       <div className='col-11 offset-1'>
                            <ShowMoreText
                            /* Default options */
                               lines={1}
                               more='+more'
                               less='-less'
                               anchorClass='moreClass'
                               onClick={this.executeOnClick}
                               expanded={false}
                               width={280}
                               color='black'

                           >
                              <p>{notification.reviewContent}</p>
                          </ShowMoreText>
                       </div>
                       <div className='col-1 offset-1'>
                          <img src='http://via.placeholder.com/30x30' style={{borderRadius:'50%'}} />
                       </div>
                       <div className='col-3'>
                          <p> {notification.fname}</p>
                       </div>
                       <div className='col-3 offset-4'>
                          <button style={{width:"100%" ,color:'#C4C4C4', borderRadius:'4px', border:'1px solid #C4C4C4'}}>Completed</button>
                       </div>

            </div>
          )
        })

         let tempArray4=[]
        hostReviews.forEach(review=>{
          tempArray4.push(
            <div className='row m-1 mt-1'>
              <div className='col-6 offset-1'>
                  <h3 style={{"fontFamily":"Poppins","fontStyle":"normal","color":"#4C5862","fontWeight":"500","fontSize":"13px","lineHeight":"19.5px","letterSpacing":"0.01em"}}> {review.timeStamp}</h3>
              </div>
              <div className='col-11 offset-1'>
              <ShowMoreText
                            /* Default options */
              lines={1}
              more='+more'
              less='-less'
              anchorClass='moreClass'
              onClick={this.executeOnClick}
              expanded={false}
              width={380}
              color='black'

               > 
               <p>
               {review.reviewContent}
               </p>
               </ShowMoreText>
               </div>                                        
            </div>
            )
        })


       


          let currentTemp=[];
          let currentTemp2=[];
          let currentTemp4=[];
          try{
            currentTemp=tempArray.slice(0,1)
          }catch(e){

          }
          try{
            currentTemp2=tempArray2.slice(0,1)
          }catch(e){

          }
          try{
            currentTemp2=tempArray2.slice(0,2)
          }catch(e){

          }
          try{
            currentTemp2=tempArray4.slice(0,2)
          }catch(e){

          }


          this.state={
              counter:1,            
              textboxIdCount:0,
              editExperience:false,
              hostRequests:tempArray,
              currenthostRequests:currentTemp,
              reviewShadowerNotifications:tempArray2,
              hostReviews:tempArray4,
              currentReviewShadowerNotifications:currentTemp2,
              myHistoryButton:'Show More',
              myReviewsAll:[],
              myReviewsCurrent:[],
              myReviewButton:'Show More',
              imgNames:[],
              selectedImages:[],
              showRequests:true,
              showCompleted:true,
              notificationFilters:[]



          }

          let tempArray3=[]
          let currentTemp3=[]
          fetch('/api/review/', {
             method: 'get',
             headers: new Headers({
                 'Content-Type':'application/json'
             }),
         }).then((response) => {

           response.json().then((reviewsData)=>{
             //setup my myReviews
             reviewsData.forEach(review=>{
                       tempArray3.push(
                         <React.Fragment>
                         <div className='col-11 ml-2 mb-2' >
                             <p style={{fontSize:'90%',lineHeight:'10px',fontWeight:'500'}}> {review.publishDate} </p>
                             <ShowMoreText
                             /* Default options */
                                lines={1}
                                more='+more'
                                less='-less'
                                anchorClass='moreClass'
                                onClick={this.executeOnClick}
                                expanded={false}
                                width={280}
                                color='black'

                            >
                               <p style={{fontSize:'80%'}}>{review.body}</p>
                           </ShowMoreText>
                         </div>

                         </React.Fragment>

                       )

               })
               try{
                 currentTemp3=tempArray3.slice(0,1)
               }catch(e){

               }
               this.setState({myReviewsAll:tempArray3,myReviewsCurrent:currentTemp3})
           })
         }).catch((err) => {
                   console.log(err)

         });

                   console.log(tempArray3)
                   console.log(currentTemp3)


         fetch('/api/experience/host/5f19ae6cb21fedd6cfee46b9', {
            method: 'get',
            headers: new Headers({
                'Content-Type':'application/json'
            }),
        }).then((response) => {
           console.log(response)

          response.json().then((experience)=>{
            console.log(experience)
                let tempskills=[]
                let tempWhatCanIOffer=[]
                let tempWhatCanIOfferBodies=[]
                experience.skills.forEach((perk,i)=>{
                  if(i===experience.skills.length-1){
                    tempskills.push(perk+'.')
                  }else{
                    tempskills.push(perk+", ")

                  }
                })
                experience.whatICanOffer.forEach((offer,i)=>{
                  if(i===experience.skills.length-1){
                    tempWhatCanIOffer.push(offer.title+'.')
                  }else{
                    tempWhatCanIOffer.push(offer.title+", ")

                  }
                  tempWhatCanIOfferBodies.push(offer.body)

                })
               this.setState({skills:tempskills, whatCanIOfferTitles:tempWhatCanIOffer, whatCanIOfferBodies:tempWhatCanIOfferBodies})


          })
        }).catch((err) => {
                  console.log(err)

        });



  }


  handleSelect=(ranges)=>{
    if(this.state.counter===1){
     this.setState({selectionRange: {
       startDate: ranges.selection.startDate,
       endDate: ranges.selection.startDate,
         key: 'selection'
     }})
   }else{
     this.setState({selectionRange: {
       startDate: ranges.selection.startDate,
       endDate: ranges.selection.endDate,
         key: 'selection'
     }})
   }

    if(this.state.counter===1){
     this.setState({counter:0})
   }else{
     this.setState({counter:1})
   }


   }

    toggleExperienceEdit=()=>{
        this.setState(prevState => ({
            editExperience: !prevState.editExperience
        }));
    }


   changeCards=()=>{
     let changeTo=1
     if(this.state.myHistoryButton.localeCompare('Show More')===0){
       changeTo=0
     }
     if(this.state.hostRequests.length>this.state.currenthostRequests.length){
       this.setState(prevState=>{
           return {...prevState,currenthostRequests:prevState.hostRequests}
          })
     }else if(this.state.hostRequests.length!==0){

       this.setState(prevState=>{
            return {...prevState,currenthostRequests:prevState.hostRequests.slice(0,1) }
            })
    }
     if(this.state.reviewShadowerNotifications.length>this.state.currentReviewShadowerNotifications.length){
          this.setState(prevState=>{
              if(changeTo===0){
                  return {...prevState,currentReviewShadowerNotifications:prevState.reviewShadowerNotifications, myHistoryButton:"Show Less"}
              }else{
                return {...prevState,currentReviewShadowerNotifications:prevState.reviewShadowerNotifications, myHistoryButton:"Show More"}

              }
          })

     }else{

       this.setState(prevState=>{
             let currentTemp2=[]

             try{
               currentTemp2=prevState.reviewShadowerNotifications.slice(0,1)
             }catch(e){

             }
             try{
               currentTemp2=prevState.reviewShadowerNotifications.slice(0,2)
             }catch(e){

             }

             if(changeTo===0){
               return { ...prevState,currentReviewShadowerNotifications:currentTemp2, myHistoryButton:"Show Less"  }
             }else{
               return { ...prevState,currentReviewShadowerNotifications:currentTemp2, myHistoryButton:"Show More"   }

             }

        });

     }
   }

   changeMyReviewCards=()=>{
     let changeTo=1
     if(this.state.myReviewButton.localeCompare('Show More')===0){
       changeTo=0
     }

       if(this.state.myReviewsAll.length>this.state.myReviewsCurrent.length){
             this.setState(prevState=>{
               if(changeTo===0){
                 return {...prevState,myReviewsCurrent:prevState.myReviewsAll, myReviewButton:"Show Less"}
               }else{
                 return {...prevState,myReviewsCurrent:prevState.myReviewsAll, myReviewButton:"Show More"}

               }
             })


       }else if(this.state.myReviewsAll.length!==0){

           this.setState(prevState=>{
               if(changeTo===0){
                 return {...prevState,myReviewsCurrent:prevState.myReviewsAll.slice(0,1), myReviewButton:"Show Less" }
               }else{
                 return {...prevState,myReviewsCurrent:prevState.myReviewsAll.slice(0,1), myReviewButton:"Show More"}
               }
           })
       }

   }


   getNextDay=(day)=>{
     if(day.localeCompare('Sun')===0){
        return 'Mon'
     }else if(day.localeCompare('Mon')===0){
        return 'Tue'
     }else if(day.localeCompare('Tue')===0){
          return 'Wed'
      } else if(day.localeCompare('Wed')===0){
        return 'Thurs'
      } else if(day.localeCompare('Thurs')===0){
        return 'Fri'

      } else if(day.localeCompare('Fri')===0){
        return 'Sat'

      } else{
        return 'Sun'

      }
   }


   handleFileUpload=(event)=> {
     if(event===null){
       this.Ref.current.value = ""
       return
     }
     let tempNames=this.state.imgNames
     let tempSelectedImages=this.state.selectedImages
     if(tempNames.length!==0){
       tempNames.push(" , ")
     }
     console.log('called')
     console.log(event.target.files[0].name)
     console.log(this.state.imgNames)
     tempNames.push(event.target.files[0].name)
     tempSelectedImages.push(event.target.files[0])
     this.setState({
       selectedImages: tempSelectedImages,
       imgNames: tempNames
     })
   }

   handleInputChange=(event)=> {
     const { name, value } = event.target;
     this.setState(prevState=>{
        return({
             ...prevState,
             [name]: value
           })
     });
   }

   updateNotificationFilters=(e)=>{
     if(e.target.classList.contains('disabled')){
       console.log(e.target.classList)
       e.target.classList.remove('disabled')

     }else{
       e.target.classList.add('disabled')

     }

     if(e.target.innerHTML.localeCompare('Requests')===0){
       this.setState(prevState=> ({...prevState, showRequests:!prevState.showRequests}) )
     }
     if(e.target.innerHTML.localeCompare('Completed')===0){
       this.setState(prevState=> ({...prevState, showCompleted:!prevState.showCompleted}) )
     }
     let found=false
     let temp=this.state.notificationFilters
     temp.forEach((notification,i)=>{
       if(notification.localeCompare(e.target.innerHTML)===0){
         temp[i]=''
         found=true
       }
     })
     if(!found){
       temp.push(e.target.innerHTML)
     }
     this.setState({notificationFilters:temp})


   }


  render() {

    let showRequests=false
    let showCompleted=false
    let filterSelected=false
    this.state.notificationFilters.forEach(notification=>{
      if(notification.localeCompare('')!==0){
        filterSelected=true
        if(notification.localeCompare('Requests')===0){
          showRequests=true
        }else if(notification.localeCompare('Completed')===0){
          showCompleted=true

        }
      }
    })
    if(!filterSelected){
      showRequests=true;
      showCompleted=true;
    }


    let todayDate=  new Date(moment().format("MM-DD-YYYY"))
    let todayDateArr=todayDate.toDateString().split(' ')
    let weekDaysToDisplay=[ ]
    let weekNumsToDisplay=[]
    weekNumsToDisplay[0]=parseInt(todayDateArr[2])
    weekDaysToDisplay.push(todayDateArr[0])
    for(var i=1; i<7;i++){
      weekDaysToDisplay[i]=this.getNextDay(weekDaysToDisplay[i-1])
    }
    for(var i=1; i<7;i++){
      weekNumsToDisplay[i]=weekNumsToDisplay[i-1]+1
    }
  //  todayDate.push( moment().format("MM-DD-YYYY"))
  var distantDate =  new Date(moment().add(20, 'year').calendar());

  let styleViewPort={ height:window.innerHeight+'px', width:window.innerWidth+'px' }
  let styleDateSection={"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px",height:(window.innerHeight/2.2+'px')}

  return(
    <div className="bg-light" style={styleViewPort}>
    <Navbar className='mb-5' textColor={"black"} />

    <div className='pt-5 mt-5 mr-5'>
                <div className='row pt-4' >
                        <div className='col-5  offset-1 mt-2'>
                            <div className='row p-3' style={{background: '#FFFFFF',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                <div className='col-12 ' >
                                  <h5 className='pb-4' style={{fontFamily:'Poppins', fontWeight:'500', fontStyle:'normal', color:'#334D6E', fontSize:'100%'}}> My Shadowing Progress</h5>
                                </div>
                                <div style={{height:'150px', marginLeft:'4%'}}>
                                    <p style={{fontFamily:'Poppins', color:'#192A3E', fontWeight:'700'}}>{todayDateArr[2]} {todayDateArr[1]}, <span style={{color:' #707683'}}>{todayDateArr[0]}</span></p>

                                    <div className='row'>
                                    <p className='col-1'>{weekDaysToDisplay[0]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[1]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[2]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[3]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[4]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[5]}</p>
                                    <p className='col-1 ml-3'>{weekDaysToDisplay[6]}</p>
                                    </div>
                                    <div className='row'>
                                    <p className='col-1' style={{background:' #109CF1', borderRadius:'60%'}}>{weekNumsToDisplay[0]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[1]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[2]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[3]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[4]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[5]}</p>
                                    <p className='col-1 ml-3'>{weekNumsToDisplay[6]}</p>
                                    </div>

                                 </div>


                                  <div className='row '>
                                              <p className='col-lg-2 col-3' style={{whiteSpace:'pre',fontFamily:"Poppins","fontStyle":"normal","color":"#6A707E"}}
                                              >Show :</p>
                                              <Button className='col-lg-2 col-3 btn-pos no-border' style={{height:'70%', width:'150%', fontSize:'80%', background:"#2ED47A", color:'#FFFFFF'}}  onClick={(e)=> this.updateNotificationFilters(e)}
                                              >Requests
                                              </Button>
                                              <Button className='col-lg-2 col-3 btn-pos no-border' style={{height:'70%', width:'110%',fontSize:'80%',background:"#FE8D86",color:'#FFFFFF'}}   onClick={(e)=> this.updateNotificationFilters(e)}
                                              >
                                                Upcoming
                                              </Button>
                                              <Button className='col-lg-2 col-3 btn-pos' style={{height:'70%', width:'110%',fontSize:'80%',background:"#FFFFFF",color:'#5E239D'}}   onClick={(e)=> this.updateNotificationFilters(e)}
                                               >
                                                Ongoing
                                               </Button>
                                              <Button className='col-lg-2 col-3 btn-pos no-border' style={{height:'70%', width:'110%',fontSize:'80%',background:"#6C7B8A",color:'#FFFFFF'}}  onClick={(e)=> this.updateNotificationFilters(e)}
                                              >
                                                Completed
                                              </Button>
                                  </div>

                                <div className='col-12' >
                                  {showRequests?this.state.currenthostRequests:null}
                                  {showCompleted?this.state.currentReviewShadowerNotifications:null}
                                </div>
                                <div className='col-12 mt-2 d-flex justify-content-center' >
                                  <button onClick={this.changeCards} style={{color:'#109CF1', background:'none', border:'none'}}> {this.state.myHistoryButton} </button>
                                </div>
                            </div>

                        </div>
                        <div className='col-5 offset-1' >
                            <div className='row pt-1' >
                                              <div className='col-12 pb-4' style={{background: '#FFFFFF',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                                    <div className='col-12' >
                                                          <div className='row'>
                                                            <h5
                                                            className='mt-2 col-5 pt-1' style={{fontSize:'90%',fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal'}}
                                                            >
                                                              My Profile
                                                              <button onClick={this.toggleExperienceEdit} style={{outline:'none',border:'transparent',background:'#ffffff'}}>
                                                              <MDBIcon icon="edit" fixed />
                                                              </button>

                                                            </h5>
                                                            <div className='col-6 pt-1'>
                                                            <Link>
                                                                <p style={{color:'#707683', fontSize:'100%'}}> <MDBIcon icon="question-circle" fixed /> What makes a great one?</p>
                                                            </Link>
                                                            </div>
                                                         </div>

                                                    </div>
                                                    <div className='row m-1 mt-1'>
                                                          <div className='col-2 ' >
                                                                <h5
                                                                style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}
                                                                >About:
                                                                </h5>
                                                          </div>
                                                          <div className='col-10'>
                                                              {this.state.editExperience?
                                                                <input
                                                                  type="text"
                                                                  name="skills"
                                                                  placeholder=""
                                                                  value={this.state.whatCanIOfferTitles}
                                                                  onChange={this.handleInputChange}
                                                                />
                                                                :
                                                                <h5
                                                                style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"15px","letterSpacing":"0.01em"}}
                                                                >{this.state.whatCanIOfferTitles}
                                                                </h5>
                                                              }

                                                          </div>
                                                          <div className='col-2 ' >
                                                                <h5
                                                                 style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}
                                                                 >Skills:
                                                                 </h5>
                                                          </div>
                                                          <div className='col-10'>

                                                                {this.state.editExperience?
                                                                  <input
                                                                    type="text"
                                                                    name="skills"
                                                                    placeholder=""
                                                                    value={this.state.skills}
                                                                    onChange={this.handleInputChange}
                                                                  />
                                                                  :
                                                                  <h5
                                                                  style={{"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}
                                                                  >
                                                                  {this.state.skills}
                                                                  </h5>

                                                                }

                                                          </div>

                                                          <div className='col-2 ' >
                                                                <h5
                                                                style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}
                                                                >Photos:
                                                                </h5>

                                                          </div>
                                                          <div className='col-2' >
                                                            <label  className="imgSubmit">
                                                              <input  type="file" ref={this.Ref} name="file_photoId" accept="image/*"  onChange={(e)=>this.handleFileUpload(e)} />
                                                                <div className='box m-1 p-1' style={{height:'5rem',width:'5rem'}}>
                                                                <div className="hl"></div>
                                                                <div className="vl"></div>
                                                                </div>
                                                            </label>
                                                            <p>{this.state.imgNames}</p>

                                                          </div>
                                                          <div className='col-12 pb-1' >
                                                            {this.state.imgNames.length!==0?
                                                              <a onClick={  ()=>{  this.setState({imgNames:[], selectedImages:[]}, this.handleFileUpload(null) )  } }
                                                              >
                                                              Clear Image Selections
                                                              </a>
                                                              :null
                                                            }
                                                          </div>
                                                          {this.state.editExperience?
                                                          <div className='col-12' >
                                                            <button> Confirm Changes </button>
                                                          </div>
                                                          :null
                                                          }


                                                    </div>


                                              </div>

                                              <div className='col-12 mt-5' style={{background: '#FFFFFF',"boxShadow":"0px 6px 18px rgba(0, 0, 0, 0.08)","borderRadius":"4px"}}>
                                                    <div className='row m-1' >
                                                        <div className='col-3 mt-2 pt-1'>
                                                            <h5  style={{fontFamily:'Poppins', fontWeight:'700', fontStyle:'normal', fontSize:'90%'}}> My Review </h5>
                                                        </div>
                                                        <div className='col-5 ml-5 mt-2'>

                                                            <Link>
                                                                <p style={{color:'707683', fontSize:'100%'}}> <MDBIcon icon="question-circle" fixed /> How to get better reviews?</p>
                                                            </Link>
                                                         </div>
                                                         <div className='col-2 ml-4 mt-2'>
                                                           <a class="btn btn-outline-black dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">Sort</a>

                                                            <div class="dropdown-menu">
                                                              <a class="dropdown-item" href="#">Latest</a>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className='row m-1'>

                                                                <div className='col-4 mt-2'>
                                                                <p
                                                                style={{color:'#707683',"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"400","fontSize":"80%","lineHeight":"10px","letterSpacing":"0.01em"}}
                                                                >My Review Score:
                                                                </p>
                                                                </div>
                                                                <div className='col-1' style={{borderRadius:'15px', opacity:'0.6', background:'#192A3E', fontSize:'80%',height:'24px',width:'56px'}}>
                                                                  <p
                                                                   className='text-center d-flex justify-content-center' style={{color:'white'}}
                                                                  >
                                                                  4.8
                                                                  </p>
                                                                </div>
                                                                {this.state.myReviewsCurrent}
                                                                {this.state.hostReviews}
                                                                <div className='col-12 d-flex justify-content-center' >
                                                                  <button onClick={this.changeMyReviewCards} style={{color:'#109CF1', background:'none', border:'none'}}>
                                                                  {this.state.myReviewButton}
                                                                  </button>
                                                                </div>
                                                                
                                                    </div>  
                
                                                    

                                              </div>


                              </div>
                            </div>

                </div>
    </div>

    </div>

  );
}
}


export default   Dashboard;
