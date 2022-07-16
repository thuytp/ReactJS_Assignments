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
  FormFeedback,
} from "reactstrap";

export const AddStaff = (props) => {
  const [values, setValues] = useState({
    nameInput: "",
    dobInput: "",
    salaryInput: "",
    startDateInput: "",
    departmentInput: "",
    annualLeaveInput: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const [touched, setTouched] = useState({
    nameInput: false,
    dobInput: false,
    salaryInput: false,
    startDateInput: false,
    departmentInput: false,
    annualLeaveInput: false,
  });

  const handleBlur = (event) => {
    setTouched((prev) => ({ ...prev, [event.name]: true }));
  };

  const [errors, setErrors] = useState({});

  let isValid = true;

  const validate = (values) => {
    let errors = {};

    if (!values.nameInput) {
      errors.name = "Nhập tên";
      isValid = false;
    }

    if (!values.dobInput) {
      errors.dob = "Nhập ngày tháng năm sinh";
      isValid = false;
    }
    if (!values.startDateInput) {
      errors.startDate = "Nhập ngày vào công ty";
      isValid = false;
    }

    if (!values.salaryInput) {
      errors.salary = "Nhập hệ số lương";
      isValid = false;
    }

    if (!values.departmentInput) {
      errors.department = "Chọn phòng ban";
      isValid = false;
    }
    if (!values.annualLeaveInput) {
      errors.annualLeave = "Nhập số ngày nghỉ còn lại";
      isValid = false;
    }

    return errors;

    // if (touched.nameInput && values.nameInput.trim().length === 0) {
    //   setErrors((prev) => ({ ...prev, nameInput: "Nhập tên" }));
    //   isValid = false;
    // }

    // if (touched.dobInput && values.dobInput.trim().length === 0) {
    //   isValid = false;
    //   setErrors((prev) => ({ ...prev, dobInput: "Nhập ngày tháng năm sinh" }));
    // }

    // if (touched.startDateInput && values.startDateInput.trim().length === 0) {
    //   isValid = false;
    //   setErrors((prev) => ({
    //     ...prev,
    //     startDateInput: "Nhập ngày vào công ty",
    //   }));
    // }
    // if (touched.salaryInput && values.salaryInput.trim().length === 0) {
    //   isValid = false;
    //   setErrors((prev) => ({ ...prev, salaryInput: "Nhập hệ số lương" }));
    // }
    // if (
    //   touched.annualLeaveInput &&
    //   values.annualLeaveInput.trim().length === 0
    // ) {
    //   isValid = false;
    //   setErrors((prev) => ({
    //     ...prev,
    //     annualLeaveInput: "Nhập số ngày nghỉ còn lại",
    //   }));
    // }
  };

  const addStaffHandler = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    console.log(isValid);
    if (isValid) {
      props.onAddStaff(
        values.nameInput,
        values.dobInput,
        values.salaryInput,
        values.startDateInput,
        values.departmentInput,
        values.annualLeaveInput
      );

      setValues({
        nameInput: "",
        dobInput: "",
        salaryInput: "",
        startDateInput: "",
        departmentInput: "",
        annualLeaveInput: "",
      });

      setErrors({
        nameInput: "",
        dobInput: "",
        salaryInput: "",
        startDateInput: "",
        departmentInput: "",
        annualLeaveInput: "",
      });
    } else return;
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
                name="nameInput"
                value={values.nameInput}
                onChange={changeHandler}
                invalid={errors.name !== undefined}
              />
              <FormFeedback>{errors.name}</FormFeedback>
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
                name="dobInput"
                placeholder="dd/mm/yyyy"
                value={values.dobInput}
                onChange={changeHandler}
                invalid={errors.dob !== undefined}
              />
              <FormFeedback>{errors.dob}</FormFeedback>
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
                name="startDateInput"
                placeholder="dd/mm/yyyy"
                value={values.startDateInput}
                onChange={changeHandler}
                invalid={errors.startDate !== undefined}
              />
              <FormFeedback>{errors.startDate}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="department" md="3">
              Phòng ban
            </Label>
            <Col md="9">
              <Input
                type="select"
                defaultValue={"Default"}
                id="department"
                name="departmentInput"
                onChange={changeHandler}
                invalid={errors.startDate !== undefined}
              >
                <option value="Default" disabled>
                  Chọn phòng ban
                </option>
                <option>Sale</option>
                <option>HR</option>
                <option>Marketing</option>
                <option>IT</option>
                <option>Finance</option>
              </Input>
              <FormFeedback>{errors.department}</FormFeedback>
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
                name="salaryInput"
                value={values.salaryInput}
                onChange={changeHandler}
                invalid={errors.salary !== undefined}
              />
              <FormFeedback>{errors.salary}</FormFeedback>
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
                name="annualLeaveInput"
                value={values.annualLeaveInput}
                onChange={changeHandler}
                invalid={errors.annualLeave !== undefined}
              />
              <FormFeedback>{errors.annualLeave}</FormFeedback>
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
