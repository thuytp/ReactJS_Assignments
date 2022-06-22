import { Card, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function StaffList(props) {
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
        {" "}
        <h2 style={{ margin: "15px 0px 0px 15px" }}>Nhân Viên</h2>
      </div>
      <hr />
      <div className="row"> {staffName}</div>
    </div>
  );
}

export default StaffList;
