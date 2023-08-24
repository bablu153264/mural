import React, { useState } from "react";
import "./sidebar.css";
import { BiUser } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { IoDocumentsSharp, IoLogOut } from "react-icons/io5";
import { MdCoPresent } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiWrench } from "react-icons/hi2";
import { Link } from "react-router-dom";

const HrSideBar = () => {
  const [isDocumentsCollapsed, setIsDocumentsCollapsed] = useState(false);
  const [issupportCollapsed, setIssupportCollapsed] = useState(false);

  const toggleDocumentsCollapse = () => {
    setIsDocumentsCollapsed(!isDocumentsCollapsed);
    setIssupportCollapsed(false);
  };

  const togglesupportCollapse = () => {
    setIssupportCollapsed((prevState) => !prevState);
    setIsDocumentsCollapsed(false);
  };

  return (
    <div>
      <div id="hrhomepage_body">
        <div id="sidebarheader">
          <BiUser className="sidebarusericon" />
          <div className="sidebarhrhomename">phani</div>
        </div>

        <div className="sidebarmiddle">
          <div id="sidebarmiddle">
            <div>
              <Link to="/myprofile">
                <button className="hrhomemyprofile">
                  <HiUserCircle className="componenticon" />
                  <span className="componentnames">My Profile</span>
                </button>
              </Link>
            </div>

            <div>
              <button
                className="hrhomedocument"
                onClick={toggleDocumentsCollapse}
              >
                <IoDocumentsSharp className="componenticon" />
                <span className="componentnames">Documents</span>
              </button>
            </div>
            {isDocumentsCollapsed && (
              <div className="documents-collapse">
                <Link to="/hr/viewfiles">
                  <div>
                    <button className="documnetviewfiles">View Files</button>
                  </div>
                </Link>
                <Link to="/hr/addfiles">
                  <div>
                    <button className="documentviewfeedback">
                      View Feedbacks{" "}
                    </button>
                  </div>
                </Link>
                <div>
                  <button className="documnetenablefeedback">
                    Enable Feedback{" "}
                  </button>
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
            {issupportCollapsed && (
              <div className="support-collapse">
                <div>
                  <button className="supportallticket">
                    All Queries 
                    <span class="hrhomepagebadge">
                      3
                    </span>
                  </button>
                </div>
                <div>
                  <button className="supportviewticket">
                    Solved Queries 
                    <span class="hrhomepagebadge">
                      3
                    </span>
                  </button>
                </div>
                <div>
                  <button className="supporttickethistory">
                    Unsolved Queries 
                    <span class="hrhomepagebadge">
                      0
                    </span>
                  </button>
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

export default HrSideBar;

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Collapse from "@mui/material/Collapse";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import FForm from "../components/form";
// import { Link } from "react-router-dom";

// const drawerWidth = 240;

// export default function PermanentDrawerLeft() {
//   const [isDocumentOpen, setIsDocumentOpen] = useState(false);
//   const [isSupportOpen, setIsSupportOpen] = useState(false);

//   const toggleDocumentCollapse = () => {
//     setIsDocumentOpen(!isDocumentOpen);
//   };
//   const toggleSupportCollapse = () => {
//     setIsSupportOpen(!isSupportOpen);
//   };
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//       >
//         {/* <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Permanent drawer
//           </Typography>
//         </Toolbar> */}
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           <ListItem key="My Profile" disablePadding>
//             <ListItemButton>
//               <ListItemText primary="My Profile" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//         <List>
//           <ListItemButton
//             key="Document"
//             disablePadding
//             button
//             onClick={toggleDocumentCollapse}
//           >
//             <ListItemText primary="Document" />
//             {isDocumentOpen ? <ExpandLess /> : <ExpandMore />}
//           </ListItemButton>
//           <Collapse in={isDocumentOpen} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItemButton>
//               <Link to="/addfile"> {/* Replace with the actual path */}
//                   <ListItemText primary="View Files" />
//                 </Link>
//               </ListItemButton>
//               <ListItemButton>
//                 <ListItemText primary="Enable Feedback" />
//               </ListItemButton>
//             </List>
//           </Collapse>
//           <List>
//             <ListItem key="Attendance" disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Attendance" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//           <List>
//             <ListItemButton
//               key="Support"
//               disablePadding
//               button
//               onClick={toggleSupportCollapse}
//             >
//               <ListItemText primary="Support" />
//               {isSupportOpen ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={isSupportOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 <ListItemButton>
//                   <ListItemText primary="View Queries" />
//                 </ListItemButton>
//                 <ListItemButton>
//                   <ListItemText primary="Solved Queries" />
//                 </ListItemButton>
//                 <ListItemButton>
//                   <ListItemText primary="Unsolved Queries" />
//                 </ListItemButton>
//               </List>
//             </Collapse>
//           </List>
//           <List>
//             <ListItem key="Sign Out" disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Sign Out" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </List>
//         <Divider />
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
//       >
//         <Toolbar />
//         {/* <FForm /> */}
//       </Box>
//     </Box>
//   );
// }
