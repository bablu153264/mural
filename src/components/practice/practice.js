import React, { Component } from 'react';
import '../practice/practice.css';
import axios from 'axios';

class FForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      selectedFiles: [],
      errorMessage: '',
      fileError: ''
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleEmailChange=this.handleEmailChange.bind(this);
    this.handleFileChange=this.handleFileChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const allowedExtensions = /(\.pdf|\.doc|\.png)$/i;
    let errorMessage = '';
    let validFiles = [];
  
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (!allowedExtensions.exec(file.name)) {
        errorMessage = 'Only PDF, DOC, and PNG files are allowed.';
      } else if (file.size > 10 * 1024 * 1024) {
        errorMessage = 'File size must be less than 10MB.';
      } else {
        validFiles.push(file);
      }
    }
    this.setState({ selectedFiles: validFiles, errorMessage });
  };
  
  handleSubmit=(e)=>{
    e.preventDefault();
    const { name, email, selectedFiles } = this.state;
    const fileRegister={
      "name":this.state.name,
      "email":this.state.email,
      "selectedFiles":this.state.selectedFiles
    }
    console.log("file Register :",fileRegister);
    // localhost:4000/document_filesupload/create-user_document_uploadfiles
    axios.post("http://127.0.0.1:4000/document_filesupload/create-user_document_uploadfiles",fileRegister)
    .then((res) =>{
      res.json();
      console.log("Response:", res.data);
    })
    .catch((error)=>{
      console.log("Error:",error);
    });

    this.setState({name: "", email:"",selectedFiles:[]})
  }
  render() {
    const { name, email, errorMessage } = this.state;

    return (
      <div>
        <h2>File Upload </h2>
        <div className='file_form'>
        <form onSubmit={this.handleSubmit} encType="multipart/form-data">
          <div>
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleNameChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} required />
          </div>
          <div>
            <label>Upload File (.pdf, .doc, .png):</label>
            <input type="file"  accept=".pdf,.doc,.png"  onChange={this.handleFileChange} multiple required />
            {this.state.fileError && (<span className="error-message">{this.state.fileError}</span>)}
            <p className="error-message">{errorMessage}</p>
          </div>
          <div>
            <button type="submit" className='form_button'>Submit</button>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default FForm;