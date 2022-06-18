import { Card, CardText, CardTitle } from "reactstrap";

function Department(props) {
  const department = props.departments.map((department) => {
    return (
      <div key={department.id} className="col-12 col-md-6 col-lg-4">
        <Card className="m-1">
          <CardTitle>{department.name}</CardTitle>
          <CardText>Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </Card>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{department}</div>
    </div>
  );
}

export default Department;
