import { Card, CardImg, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import AddStaff from "./AddStaff";

function StaffList(props) {
  const inputRef = useRef();

  const [formStatus, setFormStatus] = useState(false);

  const toggleForm = () => {
    setFormStatus(!formStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredInput = inputRef.current.value;

    const filtered = props.staffs.filter((staff) =>
      staff.name.toLowerCase().includes(enteredInput.toLowerCase())
    );
    props.onSearch(filtered);
    inputRef.current.value = "";
    // setSearchInput("");
  };

  const staffName = props.staffs.map((staff) => {
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

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-6 col-lg-5">
          <h2>Nhân Viên</h2>
        </div>
        <div className="col-10 col-md-6 col-lg-2">
          <Button onClick={toggleForm}>
            <span className="fa fa-plus fa-lg" />
          </Button>
        </div>
        <Form onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-5">
          <input type="text" ref={inputRef}></input>
          <Button type="submit" className="bg-primary">
            Tìm
          </Button>
        </Form>
        <hr />
      </div>
      <div className="row"> {staffName}</div>
      <AddStaff isFormOpen={formStatus} toggleForm={toggleForm} />
    </div>
  );
}

export default StaffList;
