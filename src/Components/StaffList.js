import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { useState } from "react";

function StaffList(props) {
  const staffName = props.staffs.map((staff) => {
    return (
      <div
        key={staff.id}
        className="col-12 col-md-6 col-lg-4"
        style={{ marginTop: "10px" }}
      >
        <Card onClick={() => props.onStaffSelect(staff)}>
          <CardTitle
            style={{
              marginTop: "10px",
              fontWeight: staff === props.selectedStaff ? "bold" : "normal",
            }}
          >
            {staff.name}
          </CardTitle>
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
