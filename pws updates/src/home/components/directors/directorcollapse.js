
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './directorcollapse.css'; // Make sure to import your stylesheet
import DirectorsCard from '../directors/card/directors';

export default function Directorsbutton() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button className="my-custom-btn outlined" onClick={handleCollapseToggle}>
        Directors
      </button>
      <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
        <div className="card card-body">
          <DirectorsCard/>
        </div>
      </div>
    </div>
  );
}

