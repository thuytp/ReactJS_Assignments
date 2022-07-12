import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { useState } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const isNumber = (val) => !isNaN(Number(val));

function AddStaff(props) {
  const [newStaff, setNewStaff] = useState({
    name: "",
    doB: "",
    salaryScale: "",
    startDate: "",
    department: "",
    annualLeave: "",
    overTime: "",
    salary: "",
    image: "/assets/images/alberto.png",
  });
  return (
    <Modal isOpen={props.isFormOpen} toggle={props.toggleForm}>
      <ModalHeader>Thêm Nhân Viên</ModalHeader>
      <hr />
      <ModalBody></ModalBody>
      <LocalForm>
        <Row className="form-group">
          <Label htmlFor="name" md="3">
            Tên
          </Label>
          <Col md="9">
            <Control.text
              className="form-control"
              id="name"
              name="name"
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
  );
}

export default AddStaff;
