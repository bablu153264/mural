import React, { useEffect, useState } from "react";
import axios from "axios";
import FilesDisplay from "./displayintable";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import './display.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewFiles() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:4000/files/")
      .then((res) => {
        console.log(res.data);
        setFeedback(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const downloadImagesAsZip = async (user) => {
    const userFeedback = feedback.find((res) => res.name === user);
    
    if (!userFeedback) {
      console.error(`User ${user} not found in feedback.`);
      return;
    }

    const zip = new JSZip();
    
    const promises = userFeedback.selectedFiles.map(async (file, index) => {
      const response = await fetch(file.base64Data);
      const blob = await response.blob();
      zip.file(`image_${index + 1}.png`, blob);
    });

    try {
      await Promise.all(promises);
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `${user}_images.zip`);
      toast.success("File downloaded successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        hideProgressBar: true,
      });
    } catch (error) {
      console.error("Error downloading images:", error);
      toast.error("Error downloading documents.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div>
      <div id="viewfilesheading">
        View Files
      </div>
      <ToastContainer />
      {feedback.map((res, i) => (
        <div key={i} className="file-box">
          <FilesDisplay obj={res} />
          <button
            className="DownloadFilebtn"
            onClick={() => downloadImagesAsZip(res.name)}
          >
            {/* Download {res.name}'s Documents */}
            Download File
          </button>
        </div>
      ))}
    </div>
  );
}







