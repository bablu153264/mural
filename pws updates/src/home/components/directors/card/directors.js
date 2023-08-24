import React from "react";
import "./directors.css";
import jeff from "../../../../directorsimages/jeff.png";
import tom from "../../../../directorsimages/tom.png";
import paul from "../../../../directorsimages/paul.png";
import Santosh from "../../../../directorsimages/Santosh.png";

const DirectorsCard = () => {
  return (
    <div className="directors-container">
      <div className="directors-cardbody">
        <div className="directors-product-card">
          <div className="directors-product-img">
            <img src={jeff} alt="Jeff Davis" />
          </div>
          <div className="directors-product-details">
            <h4>Jeff Davis</h4>
            <p>
              Jeff Davis is chairman and chief executive officer for Perficient,
              a leading global digital consultancy. Jeff leads daily business
              operations and directs the development and execution of the
              company's global growth strategy and initiatives.
            </p>
          </div>
        </div>
      </div>
      <span className="directors-cardbody1">
        <span className="directors-product-card">
          <span className="directors-product-img">
            <img src={tom} alt="Tom Hogan" />
          </span>
          <span className="directors-product-details">
            <h4>Tom Hogan</h4>
            <p>
              Tom Hogan, Perficient's president and chief operating officer, has
              more than 20 years of experience in consulting and technology
              business development and leadership.
            </p>
          </span>
        </span>
      </span>
      <div className="directors-cardbody2">
        <div className="directors-product-card">
          <div className="directors-product-img">
            <img src={paul} alt="Paul Martin" />
          </div>
          <div className="directors-product-details">
            <h4>Paul Martin</h4>
            <p>
              Paul Martin is a senior financial executive with 25 years of
              financial and accounting experience, Paul Martin was appointed as
              the chief financial officer at Perficient.
            </p>
          </div>
        </div>
      </div>
      <div className="directors-cardbody3">
        <div className="directors-product-card">
          <div className="directors-product-img">
            <img src={Santosh} alt="Santhosh Nair" />
          </div>
          <div className="directors-product-details">
            <h4>Santhosh Nair</h4>
            <p>
              Santhosh Nair leads Perficient's experts in supply chain
              management, ERP, corporate performance management, and Sitecore
              consulting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsCard;
