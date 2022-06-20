import { Card, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

function StaffList(props) {
  const staffName = props.staffs.map((staff) => {
    return (
      <div
        key={staff.id}
        className="col-6 col-md-4 col-lg-2"
        style={{ marginTop: "10px" }}
      >
        <Card>
          <Link to={`/nhanvien/${staff.id}`}>
            <CardImg src={staff.image} />
          </Link>
          <h5>{staff.name}</h5>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row"> {staffName}</div>
    </div>
  );
}

export default StaffList;
