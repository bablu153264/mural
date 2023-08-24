import React from "react";
import "./directorscard.css";

//importing images
import jeff from "../../../directorsimages/jeff.png";
import tom from "../../../directorsimages/tom.png";
import paul from "../../../directorsimages/paul.png";
import Santosh from "../../../directorsimages/Santosh.png";
import quote from "../../../images/quote.png";

export default class LandingDirectorscard extends React.Component {
  render() {
    return (
      <div>
        <div className="directorcard1">
          <div className="headercolour">
            <span className="jeff">Jeff Davis</span>
          </div>
          <div className="directorimage">
            <img src={jeff} className="divimage" />
          </div>
          <div className="quotes">
            <img src={quote} className="quotesimage" />
          </div>
          <div className="directorcontent">
            <div class="indent">
              Jeff Davis is chairman and chief executive officer for Perficient,
              a leading global digital consultancy. Jeff leads daily business
              operations and directs the development and execution of the
              company's global growth strategy and initiatives.
            </div>
          </div>
        </div>

        <div className="directorcard2">
          <div className="headercolour">
            <span className="tom">Tom Hogan</span>
          </div>
          <div className="directorimage">
            <img src={tom} className="divimage" />
          </div>
          <div className="quotes">
            <img src={quote} className="quotesimage" />
          </div>
          <div className="directorcontent">
            <div class="indent">
              Tom Hogan, Perficient's president and chief operating officer, has
              more than 20 years of experience in consulting and technology
              business development and leadership. As COO, Tom oversees all
              Perficient business groups and operations.
            </div>
          </div>
        </div>

        <div className="directorcard3">
          <div className="headercolour">
            <span className="paul">Paul Martin</span>
          </div>
          <div className="directorimage">
            <img src={paul} className="divimage" />
          </div>
          <div className="quotes">
            <img src={quote} className="quotesimage" />
          </div>
          <div className="directorcontent">
            <div class="indent">
              Paul Martin is a senior financial executive with 25 years of
              financial and accounting experience, Paul Martin was appointed as
              the chief financial officer at Perficient.Paul is responsible for
              all aspects of financial compliance, reporting and accounting at
              Perficient.
            </div>
          </div>
        </div>

        <div className="directorcard4">
          <div className="headercolour">
            <span className="santosh">Santhosh Nair</span>
          </div>
          <div className="directorimage">
            <img src={Santosh} className="divimage" />
          </div>
          <div className="quotes">
            <img src={quote} className="quotesimage" />
          </div>
          <div className="directorcontent">
            <div class="indent">
              Santhosh Nair leads Perficient's experts in supply chain
              management, ERP, corporate performance management, and Sitecore
              consulting. With nearly 22 years of consulting experience in EPM,
              ERP and BI, he has helped clients implement financial solutions to
              drive value with their technology investments.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
