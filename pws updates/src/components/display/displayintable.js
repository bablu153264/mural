import React from "react";
import './displayintable.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";

export default function FileDisplay(props) {
  
  return (
    <div>
      <table id="custom-table"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Files</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>
              <BsFillEyeFill/>
              <div id="custom-file-container"> 
                {props.obj.selectedFiles.map((file, index) => (
                  <div key={index} id="custom-file-item"> 
                    <img src={file.base64Data} alt={`File ${index}`} width='100' height='100' />
                  </div>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}










