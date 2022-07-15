import React, { useState } from "react";
import {
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Button,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import propTypes from "prop-types";

export const AddStaff = (props) => {
  const required = (val) => val && val.length;
  const isNumber = (val) => !isNaN(Number(val));

  const [nameInput, setNameInput] = useState("");
  const [dobInput, setDobInput] = useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [departmentInput, setDepartmentInput] = useState("");
  const [salaryInput, setSalaryInput] = useState("");
  const [annuaLeaveInput, setAnnualLeaveInput] = useState("");

  const nameInputHandler = (event) => {
    setNameInput(event.target.value);
  };

  const dobInputHandler = (event) => {
    setDobInput(event.target.value);
  };

  const startDateInputHandler = (event) => {
    setStartDateInput(event.target.value);
  };

  const departmentInputHandler = (event) => {
    setDepartmentInput(event.target.value);
  };

  const salaryInputHandler = (event) => {
    setSalaryInput(event.target.value);
  };

  const annualLeaveInputHandler = (event) => {
    setAnnualLeaveInput(event.target.value);
  };

  const addStaffHandler = (e) => {
    e.preventDefault();
    props.onAddStaff(
      nameInput,
      dobInput,
      salaryInput,
      startDateInput,
      departmentInput,
      annuaLeaveInput
    );
  };

  return (
    <Modal isOpen={props.formStatus} toggle={props.toggleForm}>
      <ModalHeader>Thêm Nhân Viên</ModalHeader>
      <hr />
      <ModalBody>
        <Form onSubmit={addStaffHandler}>
          <FormGroup row>
            <Label htmlFor="name" md={3}>
              Tên
            </Label>
            <Col md={9}>
              <Input
                type="text"
                id="name"
                name="name"
                value={nameInput}
                onChange={nameInputHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="dob" md={3}>
              Ngày sinh
            </Label>
            <Col md={9}>
              <Input
                type="date"
                id="dob"
                name="dob"
                placeholder="dd/mm/yyyy"
                value={dobInput}
                onChange={dobInputHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="startDate" md={3}>
              Ngày vào công ty
            </Label>
            <Col md={9}>
              <Input
                type="date"
                id="startDate"
                name="startDate"
                placeholder="dd/mm/yyyy"
                value={startDateInput}
                onChange={startDateInputHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="department" md="3">
              Phòng ban
            </Label>
            <Col md="9">
              <Input
                type="select"
                id="department"
                name="department"
                onChange={departmentInputHandler}
              >
                <option>Sale</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>Finance</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="salaryScale" md="3">
              Hệ số lương
            </Label>
            <Col md="9">
              <Input
                type="number"
                id="salaryScale"
                name="salaryScale"
                value={salaryInput}
                onChange={salaryInputHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="annualLeave" md="3">
              Số ngày nghỉ còn lại
            </Label>
            <Col md="9">
              <Input
                type="number"
                id="annualLeave"
                name="annualLeave"
                value={annuaLeaveInput}
                onChange={annualLeaveInputHandler}
              />
            </Col>
          </FormGroup>
          <Button type="submit" value="submit" className="bg-primary">
            Thêm
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
