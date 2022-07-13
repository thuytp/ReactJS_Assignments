import React, { useRef } from "react";
import {
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Button,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

const AddStaff = (props) => {
  const nameRef = useRef();
  const dobRef = useRef();
  const startDateRef = useRef();
  const departmentRef = useRef();
  const salaryScaleRef = useRef();
  const annualLeaveRef = useRef();

  const addStaffHandler = (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDob = dobRef.current.value;
    const enteredStartDate = startDateRef.current.value;
    const enteredDepartment = departmentRef.current.value;
    const enteredSalaryScale = salaryScaleRef.current.value;
    const enteredAnnualLeave = annualLeaveRef.current.value;

    props.onAddStaff(
      enteredName,
      enteredDob,
      enteredStartDate,
      enteredDepartment,
      enteredSalaryScale,
      enteredAnnualLeave
    );
  };

  return (
    <>
      <Modal isOpen={props.formStatus} toggle={props.toggleForm}>
        <ModalHeader>Thêm Nhân Viên</ModalHeader>
        <hr />
        <ModalBody></ModalBody>
        <LocalForm onSubmit={addStaffHandler}>
          <Row className="form-group">
            <Label htmlFor="name" md="3">
              Tên
            </Label>
            <Col md="9">
              <Control.text
                className="form-control"
                id="name"
                name="name"
                ref={nameRef}
                validators={{ required }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="dob" md="3">
              Ngày sinh
            </Label>
            <Col md="9">
              <Control.date
                className="form-control"
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                ref={dobRef}
                validators={{ required }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="startDate" md="3">
              Ngày vào công ty
            </Label>
            <Col md="9">
              <Control.date
                className="form-control"
                id="startDate"
                name="startDate"
                placeholder="dd/mm/yyyy"
                ref={startDateRef}
                validators={{ required }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="department" md="3">
              Phòng ban
            </Label>
            <Col md="9">
              <Control.select
                className="form-control"
                id="department"
                name="department"
                ref={departmentRef}
                validators={{ required }}
              >
                <option>Sale</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>Finance</option>
              </Control.select>
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="salaryScale" md="3">
              Hệ số lương
            </Label>
            <Col md="9">
              <Control.number
                className="form-control"
                id="salaryScale"
                name="salaryScale"
                ref={salaryScaleRef}
                validators={{ required, isNumber }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                  isNumber: "Must be a number",
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="annualLeave" md="3">
              Số ngày nghỉ còn lại
            </Label>
            <Col md="9">
              <Control.number
                className="form-control"
                id="annualLeave"
                name="annualLeave"
                ref={annualLeaveRef}
                validators={{ required, isNumber }}
              />
              <Errors
                className="text-danger"
                model=".lastname"
                show="touched"
                messages={{
                  required: "Required",
                  isNumber: "Must be a number",
                }}
              />
            </Col>
          </Row>
          <Button type="submit" value="submit" className="bg-primary">
            Thêm
          </Button>
        </LocalForm>
      </Modal>
    </>
  );
};

export default AddStaff;
