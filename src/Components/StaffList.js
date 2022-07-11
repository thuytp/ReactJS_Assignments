import { Card, CardImg, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function StaffList(props) {
  const inputRef = useRef();

  // const [searchInput, setSearchInput] = useState("");

  // const changeHandler = (event) => {
  //   setSearchInput(event.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredInput = inputRef.current.value;
    console.log(enteredInput);
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
        <div className="col-10 col-md-6 col-lg-6">
          <h2>Nhân Viên</h2>
        </div>

        <Form onSubmit={handleSubmit} className="col-10 col-md-6 col-lg-6">
          <input
            type="text"
            // onChange={changeHandler}
            // value={searchInput}
            ref={inputRef}
          ></input>
          <button type="submit">Tìm</button>
        </Form>
        <hr />
      </div>
      <div className="row"> {staffName}</div>
    </div>
  );
}

export default StaffList;
