import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
import { DEPARTMENTS } from "../shared/staffs";

function RenderStaff(props) {
  if (props.staff != null) {
    const birthDay = new Date(props.staff.doB);
    const startDate = new Date(props.staff.startDate);
    return (
      <div className="col-12 col-md-6 col-lg-4">
        <Card style={{ textAlign: "left", padding: "20px", marginTop: "20px" }}>
          <CardTitle style={{ fontWeight: "bold", fontSize: "large" }}>
            Họ và tên: {props.staff.name}
          </CardTitle>
          <CardText>Ngày sinh: {dateFormat(birthDay, "dd/mm/yyyy")}</CardText>
          <CardText>
            Ngày vào công ty: {dateFormat(startDate, "dd/mm/yyyy")}{" "}
          </CardText>
          <CardText>Phòng ban: {props.staff.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại: {props.staff.annualLeave} </CardText>
          <CardText>Số ngày đã làm thêm: {props.staff.overTime} </CardText>
        </Card>
      </div>
    );
  } else
    return (
      <div
        className="col-12 col-md-6 col-lg-4"
        style={{ fontWeight: "bold", textAlign: "left", marginTop: "10px" }}
      >
        Bấm vào tên nhân viên để xem thông tin.
      </div>
    );
}

export default RenderStaff;
