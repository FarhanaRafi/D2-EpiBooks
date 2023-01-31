import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

const MyFooter = () => {
  return (
    <MDBFooter
      className="text-center text-white mt-5"
      style={{ backgroundColor: "#21081a" }}
    >
      <MDBContainer className="p-4"></MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright: FarhanaRafi.com
      </div>
    </MDBFooter>
  );
};

export default MyFooter;
