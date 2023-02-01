import { Card, Container, CardDeck } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Container>
        <CardDeck>
          <Card
            onClick={(e) => {
              if (this.state.selected === true) {
                this.setState({
                  selected: false,
                });
              } else {
                this.setState({
                  selected: true,
                });
              }
            }}
            style={{
              color: this.state.selected === true ? "red" : "black",
            }}
          >
            <Card.Img variant="top" src={this.props.book.img} height={370} />
            <Card.Body>
              <Card.Title className="book-title">
                {this.props.book.title}
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Container>
    );
  }
}

export default SingleBook;
