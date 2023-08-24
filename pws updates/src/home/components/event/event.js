import React from "react";
import "./event.css";

//importing background image 
import eventbg from '../../../carouselimages/eventbg.png';

//importing event carousel 
import Eventcarousel from "./cricketevent";
import CookingEvent from "./cookingevent";
import YogaEvent from "./yogaevent";
import IndependenceEvent from "./independencedayevent";



export default class Events extends React.Component {
  render() {
    return (
      <div className="homebody">
        <img src={eventbg} className="eventbg"/>
        <div className="container">
          <div>
            <div className="col-sm-6 card1">
              <div className="card">
                <Eventcarousel/>
                <div className="card-body">
                  <h6 className="card-title">Cricket </h6>
                </div>
              </div>
            </div>
            <div className="col-sm-6 card2">
              <div className="card">
              <CookingEvent/>
                <div className="card-body">
                  <h6 className="card-title">Cooking </h6>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6 card3">
              <div className="card">
              <YogaEvent/>
                <div className="card-body">
                  <h6 className="card-title">Yoga day</h6>
                  <div className="card-text marquee">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 card4">
              <div className="card">
              <IndependenceEvent/>
                <div className="card-body">
                  <h6 className="card-title">Independence Day</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
