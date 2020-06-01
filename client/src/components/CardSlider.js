import React from 'react';
import ReactDOM from "react-dom";
import data from "../explore/data.json";
import Card from "./Card";
import LeftArrow from './left-arrow'
import RightArrow from './right-arrow'

export default class CardSlider extends React.Component {
  constructor(props) {
    super(props)
    let  Cards=[];
    for(var i=0; i<data.length;i+=2){
        if(i+1<data.length){
        Cards.push(
        <div class="row">
        <div className="card col">
        <Card image={data[i].image} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
        {console.log(data[i].image)}
        </div>
        <div className="card col">
        <Card image={data[i+1].image} location={data[i+1].location} profession={data[i+1].profession} price={data[i+1].price} duration={data[i+1].duration}/>
        </div>
        </div>)
        }else{
          Cards.push(
          <div class="row">
          <div className="card col">
          <Card image={data[i].image} location={data[i].location} profession={data[i].profession} price={data[i].price} duration={data[i].duration}/>
          </div>
          </div>)
        }
    }
    let EightCardArray=[];
    let tempArray=[];
    console.log(Cards.length)
    for(var i=0; i<Cards.length;i+=1){
          if(i+3>=Cards.length){
              for(var j=i; j<Cards.length;j+=1){
              tempArray.push(Cards[i])
              i+=1

              }
          }else{
              for(var j=0; j<4;j+=1){
                tempArray.push(Cards[i])
                if(j<3){
                  i=i+1
                }
              }
          }
          console.log('here')
          let tempCopy=[];
          for (var a = 0; a < tempArray.length; a++) {
            tempCopy[a] = tempArray[a];
          }
          EightCardArray.push(tempCopy)

          tempArray.splice(0, tempArray.length)

    }
    console.log(EightCardArray.length)
    this.state = {
      EightCardSet:EightCardArray,
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.EightCardSet.length - 1
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.EightCardSet.length - 1) {
      return this.setState({
        currentIndex: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }


  render() {


  return (
    <div className=''>
    <h2 className="d-flex justify-content-center" style={{"fontFamily":"Mplus 1p","fontStyle":"normal","fontWeight":"800","fontSize":"25px","lineHeight":"26px","letterSpacing":"6px","textTransform":"uppercase","color":"#F61067"}}>
      Search Results </h2>

          <div className='row'>
                <div className="col-2 ">
                  <LeftArrow
                   prevSlide={this.goToPrevSlide}
                   coolButtons={false}
                  />
                </div>

                <div className='col-8'>
                    {this.state.EightCardSet[this.state.currentIndex]}
                </div>

                <div className="col-2">
                  <RightArrow
                   goToNextSlide={this.goToNextSlide}
                   coolButtons= {false}
                  />
                </div>




            </div>


    </div>
  );
}
}
