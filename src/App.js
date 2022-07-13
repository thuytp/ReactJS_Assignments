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
import AddStaff from "./Components/AddStaff";

function App() {
  const departments = DEPARTMENTS;

  const [formStatus, setFormStatus] = useState(false);

  const toggleForm = () => {
    setFormStatus(!formStatus);
  };

  const [search, setSearch] = useState();
  const [staffs, setStaffs] = useState(STAFFS);

  const addStaffHandler = (
    staffName,
    staffDob,
    staffSalaryScale,
    staffStartDate,
    staffDepartment,
    staffAnnualLeave
  ) => {
    setStaffs((prevStaffList) => {
      return (
        [...prevStaffList],
        {
          id: Math.random(),
          name: staffName,
          doB: staffDob,
          salaryScale: staffSalaryScale,
          startDate: staffStartDate,
          department: staffDepartment,
          annualLeave: staffAnnualLeave,
          overTime: "",
          salary: "",
          image: "/assets/images/alberto.png",
        }
      );
    });
  };

  const onSearch = (filtered) => {
    setSearch(filtered);
  };

  console.log(search);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <StaffList
              staffs={staffs}
              search={search}
              onSearch={onSearch}
              toggleForm={toggleForm}
            />
          }
        />
        <Route
          path="/phongban"
          element={<Department departments={departments} />}
        ></Route>
        <Route path="/bangluong" element={<Payroll staffs={staffs} />} />
        <Route
          exact
          path="/nhanvien"
          element={
            <StaffList
              staffs={staffs}
              search={search}
              onSearch={onSearch}
              toggleForm={toggleForm}
            />
          }
        />
        <Route path="/nhanvien/:id" element={<StaffId staffs={staffs} />} />
      </Routes>

      <AddStaff
        onAddStaff={addStaffHandler}
        formStatus={formStatus}
        toggleForm={toggleForm}
      />

      <Footer />
    </div>
  );
}

export default App;
