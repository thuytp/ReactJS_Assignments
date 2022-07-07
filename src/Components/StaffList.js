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
        <div className="col-10 col-md-6 col-lg-6">
          <h2>Nhân Viên</h2>
        </div>

        <div className="col-10 col-md-6 col-lg-6">
          <input type="text"></input>
          <button color="primary">Tìm</button>
        </div>
        <hr />
      </div>
      <div className="row"> {staffName}</div>
    </div>
  );
}

export default StaffList;
