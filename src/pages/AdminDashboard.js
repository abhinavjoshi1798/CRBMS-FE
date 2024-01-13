import React, { useState } from 'react'
import AddUserUi from '../Components/AddUserUi';
import AddRoomUi from '../Components/AddRoomUi';
import ReportsUi from '../Components/ReportsUi';


const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = useState('Add User');

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const renderUI = () => {
    switch (selectedOption) {
      case 'Add User':
        return <AddUserUi />;
      case 'Add Room':
        return <AddRoomUi />;
      case 'Reports':
        return <ReportsUi />;
      default:
        return null;
    }
  };

  return (
    <div style={{
      display: "flex",
      width: "100%",
      height: "100vh"
    }}>
      <div id='adminSideBar' style={{
        width: "10%",
        height: "100%",
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}>
        <button type="button" 
        class="btn btn-danger" 
        style={{ width: "80%", margin: "auto" }} 
        onClick={() => handleButtonClick('Add User')}>Add User</button>

        <button type="button" 
        class="btn btn-warning" 
        style={{ width: "80%", margin: "auto" }} 
        onClick={() => handleButtonClick('Add Room')}>Add Room</button>

        <button type="button" 
        class="btn btn-info" 
        style={{ width: "80%", margin: "auto" }} 
        onClick={() => handleButtonClick('Reports')}>Reports</button>
      </div>
      <div id="AdminContentDiv" style={{
        width: "90%",
        height: "100%", backgroundColor: "silver"
      }}>
        
        {renderUI()}


      </div>
    </div>
  )
}

export default AdminDashboard
