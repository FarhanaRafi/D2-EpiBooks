import { Component } from "react";
import { Card, CardDeck, Container, Row, Col } from "react-bootstrap";
import items from "../book/fantasy.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center display-5">
          <strong className="heading">Catalog</strong>
        </h2>
        <Row className="mt-3">
          {items.map((item) => {
            return (
              <Col xs={4} md={3}>
                <CardDeck className="mt-3 mb-3 card-hover">
                  <Card key={item.asin}>
                    <Card.Img variant="top" src={item.img} height={300} />
                    <Card.Body>
                      <Card.Title className="book-title">
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {item.price} $ - "{item.asin}"
                      </small>
                    </Card.Footer>
                  </Card>
                </CardDeck>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
