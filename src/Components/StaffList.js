import { Card, CardImg, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";

const StaffName = (props) =>
  props.list.map((staff) => {
    return (
      <div
        key={staff.id}
        className="col-6 col-md-4 col-lg-2"
        style={{ margin: "10px 0px" }}
      >
        <Card>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg src={staff.image} />
          </Link>
          <h5 className="text-center">{staff.name}</h5>
        </Card>
      </div>
    );
  });

function StaffList(props) {
  const searchInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredSearchInput = searchInputRef.current.value;

    const filtered = props.staffs.filter((staff) =>
      staff.name.toLowerCase().includes(enteredSearchInput.toLowerCase())
    );

    props.onSearch(filtered);

    searchInputRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-6 col-lg-5">
          <h2>Nhân Viên</h2>
        </div>
        <div className="col-10 col-md-6 col-lg-2">
          <Button onClick={props.toggleForm}>
            <span className="fa fa-plus fa-lg" />
          </Button>
        </div>
        <Form onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-5">
          <input type="text" ref={searchInputRef}></input>
          <Button type="submit" className="bg-primary">
            Tìm
          </Button>
        </Form>
        <hr />
      </div>
      <div className="row">
        {" "}
        <StaffName list={props.search ? props.search : props.staffs} />
      </div>
    </div>
  );
}

export default StaffList;
