import { Card, CardImg, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useRef } from "react";

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
      <div className="row justify-content-between">
        <div className="">
          <h2>Nhân Viên</h2>
        </div>
        <div className=" ">
          <Button onClick={props.toggleForm}>
            <span className="fa fa-plus fa-lg " />
          </Button>
        </div>
        <div className="">
          <Form onSubmit={handleSubmit}>
            <input type="text" ref={searchInputRef}></input>
            <Button type="submit" className="bg-primary">
              Tìm
            </Button>
          </Form>
        </div>
      </div>
      <div className="row">
        {" "}
        <StaffName list={props.search ? props.search : props.staffs} />
      </div>
    </div>
  );
}

export default StaffList;
