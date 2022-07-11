import React from "react";
import "./App.css";
import { DEPARTMENTS, STAFFS } from "./shared/staffs";
import StaffList from "./Components/StaffList";
import StaffId from "./Components/RenderStaffComponent";
import Header from "./Components/HeaderComponent";
import Footer from "./Components/FooterComponent";
import { Route, Routes } from "react-router-dom";
import Department from "./Components/DepartmentComponent";
import Payroll from "./Components/PayrollComponent";
import { useState } from "react";

function App() {
  const [staffs, setStaffs] = useState(STAFFS);
  const departments = DEPARTMENTS;
  const onSearch = (filtered) => {
    setStaffs(filtered);
  };
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={<StaffList staffs={staffs} onSearch={onSearch} />}
        />
        <Route
          path="/phongban"
          element={<Department departments={departments} />}
        ></Route>
        <Route path="/bangluong" element={<Payroll staffs={staffs} />} />
        <Route
          exact
          path="/nhanvien"
          element={<StaffList staffs={staffs} onSearch={onSearch} />}
        />
        <Route path="/nhanvien/:id" element={<StaffId staffs={staffs} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
