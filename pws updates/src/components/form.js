import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//importing react-icons
import { BsUpload } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";

function FForm() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  const [validConvertedFiles, setValidConvertedFiles] = useState([]);

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const allowedExtensions = /(\.jpeg|\.png)$/i;
    let error = "";
    const validFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!allowedExtensions.exec(file.name)) {
        // error = "Only PNG files are allowed.";
        toast.error("Only PNG files are allowed.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 500,
          hideProgressBar: true,
        });
      } else if (file.size > 10 * 1024 * 1024) {
        // error = "File size must be less than 10MB.";
        toast.error("File size must be less than 10MB.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 500,
          hideProgressBar: true,
        });
      } else {
        validFiles.push(file);
      }
    }

    setSelectedFiles(validFiles);
    setFileError(error);
  };

  const compressAndConvertToBase64 = async (file) => {
    try {
      const compressedImage = await compressImage(file);
      const base64Data = await convertToBase64(compressedImage);
      return {
        originalFile: file,
        compressedFile: compressedImage,
        base64Data: base64Data,
      };
    } catch (error) {
      // console.error("Error compressing image:", error);
      return null;
    }
  };

  const compressImage = async (imageFile) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const maxWidth = 800;
        const maxHeight = 600;

        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width = (maxHeight / height) * width;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            const compressedFile = new File([blob], imageFile.name, {
              type: "image/jpeg",
            });
            resolve(compressedFile);
          },
          "image/jpeg",
          0.5
        );
      };

      img.src = URL.createObjectURL(imageFile);
    });
  };

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      // setFileError("At least one file must be chosen.");
      toast.error("At least one file must be chosen.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        hideProgressBar: true,
      });

      return;
    } else {
      setFileError("");
    }
    // setName('');
    // setEmail('');
    setSelectedFiles([]);
    const convertedFilesPromises = selectedFiles.map((file) =>
      compressAndConvertToBase64(file)
    );

    try {
      const convertedFiles = await Promise.all(convertedFilesPromises);
      const validFiles = convertedFiles.filter((result) => result !== null);
      setValidConvertedFiles(validFiles);

      const fileRegister = {
        // name: name,
        // email: email,
        selectedFiles: validFiles,
      };

      const response = await axios.post(
        "http://127.0.0.1:4000/files/create-user_document_uploadfiles",
        fileRegister
      );
      // console.log("Response:", response.data);
      toast.success("Form submitted successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        hideProgressBar: true,
      });
    } catch (error) {
      // console.log("Error:", error);
    }
  };

  const handleDeleteFile = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);
    setSelectedFiles(updatedSelectedFiles);
  };

  const handleAddFile = (event) => {
    const newFiles = [...selectedFiles];
    newFiles.push(event.target.files[0]);
    setSelectedFiles(newFiles);
  };

  return (
    <div className="fform-body">
      <div id="addfilesheading">Add Files</div>
      <div className="form-upload">
        <h2 id="fileuploafd">Upload Files</h2>
        <div className="file_form">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} required />
          </div>
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div> */}
            <div className="container mt-5">
              <div className="upload-container">
                <label htmlFor="uploadFile" className="upload-label">
                  File extentions allowed(.jpeg, .png)
                </label>
                <label htmlFor="uploadInput" className="upload-button">
                  <BsUpload className="upload-icon" />
                  Choose Files
                </label>
                <input
                  type="file"
                  id="uploadInput"
                  className="upload-input"
                  accept=".jpeg,.png"
                  onChange={handleFileChange}
                  multiple
                  required
                />

                {fileError && (
                  <span className="error-message">{fileError}</span>
                )}
              </div>
              <button type="submit" className="form_button">
                Submit
              </button>
            </div>
          </form>

          {/* // )} */}
        </div>
      </div>
      <div className="slected-files-box">
        <h3>Selected Files:</h3>
        {selectedFiles.length === 0 ? (
          <p>No file is chosen.</p>
        ) : (
          <>
            <p>{selectedFiles.length} files selected</p>
            <div className="addingextrafile">
              <label htmlFor="addingextrafile">
                <AiFillFileAdd id="addfilereacticon" />
              </label>
              <input
                type="file"
                accept=".jpeg,.png"
                onChange={handleAddFile}
                id="addingextrafile"
                className="addfiles2"
              ></input>
            </div>

            <div className="selectedfilecustom-file-container">
              <table className="selectedfilecustom-file-table">
                <thead>
                  <tr>
                    <th className="selectedfiletable-heading">S.No</th>
                    <th className="selectedfiletable-heading">File Name</th>
                    <th className="selectedfiletable-heading">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedFiles.map((file, index) => (
                    <tr key={index}>
                      <td className="selectedfiletable-cell">{index + 1}</td>
                      <td className="selectedfiletable-cell">{file.name}</td>
                      <td className="selectedfiletable-cell">
                        <span
                          className="selectedfiledelete-action"
                          onClick={() => handleDeleteFile(index)}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default FForm;
