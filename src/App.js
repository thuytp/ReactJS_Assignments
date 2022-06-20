import React from "react";
import "./App.css";
import { DEPARTMENTS, STAFFS } from "./shared/staffs";
import StaffList from "./Components/StaffList";
import StaffId from "./Components/RenderStaffComponent";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import { Route, Routes, useParams } from "react-router-dom";
import Department from "./Components/DepartmentComponent";
import Payroll from "./Components/PayrollComponent";

function App() {
  const staffs = STAFFS;
  const departments = DEPARTMENTS;

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<StaffList staffs={staffs} />} />
        <Route
          path="/phongban"
          element={<Department departments={departments} />}
        ></Route>
        <Route path="/bangluong" element={<Payroll staffs={staffs} />} />
        <Route exact path="/nhanvien" element={<StaffList staffs={staffs} />} />
        <Route path="/nhanvien/:id" element={<StaffId staffs={staffs} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
