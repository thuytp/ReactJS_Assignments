import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useState } from "react";

function StaffList(props) {
  const staffName = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-12 col-md-6 col-lg-4">
        <Card onClick={() => props.onStaffSelect(staff)}>
          <CardTitle>{staff.name}</CardTitle>
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
