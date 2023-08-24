import React, { useState } from "react";
import "./hrhomepage.css";
import { BiUser } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import { HiUserCircle, HiWrench } from "react-icons/hi2";
import { IoDocumentsSharp, IoLogOut } from "react-icons/io5";
import { MdCoPresent } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
const Hrhome = () => {
  const [isDocumentsCollapsed, setIsDocumentsCollapsed] = useState(true);
  const [issupportCollapsed, setIssupportCollapsed] = useState(true);
  const [profileImage, setProfileImage] = useState(null);

  const toggleDocumentsCollapse = () => {
    setIsDocumentsCollapsed((prevState) => !prevState);
  };

  const togglesupportCollapse = () => {
    setIssupportCollapsed((prevState) => !prevState);
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    const imageFile = event.target.files[0];
    setProfileImage(imageFile);
  };

  return (
    <div className="container">
      <div className="hrhomenavigation">
        <div className="hrhomeprofile">
          <div className="hrhomeusericonssssss">
            <label htmlFor="image-upload" className="image-upload-label">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="hrhomeusericon"
                />
              ) : (
                <BiUser className="hrhomeusericon" />
              )}
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="hrhomrprofilename">
            <div className="hrhomename">phani</div>
            <div>
              <button className="hrhomeeditprofilebutton">
                {/* <BiSolidPencil className="hrhomeprofileediticon" /> */}
              </button>
            </div>
          </div>
        </div>

        <div className="hrhomecomponents-wrapper">
          <div className="hrhomecomponents">
            <div>
              <button className="hrhomemyprofile">
                <HiUserCircle className="componenticon" />
                <span className="componentnames">My Profile</span>
              </button>
            </div>

            <div onClick={toggleDocumentsCollapse}>
              <button className="hrhomedocument">
                <IoDocumentsSharp className="componenticon" />
                <span className="componentnames">Documents</span>
              </button>
            </div>
            {!isDocumentsCollapsed && (
              <div className="documents-collapse">
                <div>
                  <button className="documnetviewfiles">View Files</button>
                </div>
                <div>
                  <button className="documentviewfeedback">View Feedbacks</button>
                </div>
                <div>
                  <button className="documnetenablefeedback">Enable Feedback</button>
                </div>
              </div>
            )}

            <div>
              <button className="hrhomeattendance">
                <MdCoPresent className="componenticon" />
                <span className="componentnames">Attendance</span>
              </button>
            </div>

            <div>
              <button className="hrhomeuserdetails">
                <FaUsers className="componenticon" />
                <span className="componentnames">User Details</span>
              </button>
            </div>

            <div onClick={togglesupportCollapse}>
              <button className="hrhomesupport">
                <HiWrench className="componenticon1" />
                <span className="componentnames">Support</span>
              </button>
            </div>
            {!issupportCollapsed && (
              <div className="support-collapse">
                <div>
                  <button className="supportviewticket">Solved Queries</button>
                </div>
                <div>
                  <button className="supporttickethistory">Unsolved Queries</button>
                </div>
              </div>
            )}

            <div>
              <button className="hrhomemylogout">
                <IoLogOut className="componenticon1" />
                <span className="componentnames">Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrhome;











