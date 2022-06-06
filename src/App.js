import React from "react";
import { useState } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "./shared/staffs";
import StaffList from "./Components/StaffList";
import RenderStaff from "./Components/renderStaff";

function App() {
  const [selectedStaff, setSelectedStaff] = useState();

  function onStaffSelect(staff) {
    setSelectedStaff(staff);
  }

  const staffs = STAFFS;
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList staffs={staffs} onStaffSelect={onStaffSelect} />
      <div className="container">
        <div className="row">
          <RenderStaff staff={selectedStaff} />
        </div>
      </div>
    </div>
  );
}

export default App;
