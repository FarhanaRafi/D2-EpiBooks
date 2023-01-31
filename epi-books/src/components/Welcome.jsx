import { Jumbotron, Button, Row, Col, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron
      className="welcome1"
      style={{
        backgroundImage: `url(
          "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-577674005_492115_zfpgiw.jpg"
        )`,
      }}
    >
      <Container>
        <Row>
          <Col xs={8}>
            <h1 className="text-white display-1">
              <strong className="header">Book World</strong>
            </h1>
            <p className="text-white h2">
              “If you only read the books that everyone else is reading, you can
              only think what everyone else is thinking.”
              <br />― Haruki Murakami, Norwegian Wood
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Welcome;
