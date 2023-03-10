import { Card, Container, CardDeck } from "react-bootstrap";
import { Component } from "react";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    book: this.props.book,
    selected: false,
    asin: this.props.book.asin,
    isLoading: true,
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
                e.target.classList.remove("selected");
              } else {
                this.setState({
                  selected: true,
                });
                e.target.classList.add("selected");
              }
              this.props.selectBook(this.state.book);
            }}
            // style={{
            //   color: this.state.selected === true ? "red" : "black",
            // }}
          >
            <Card.Img variant="top" src={this.props.book.img} height={270} />
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

        {/* {this.state.selected && <CommentArea asin={this.state.asin} />} */}
        {/* {this.state.selected && <CommentsList asin={this.state.asin} />} */}
      </Container>
    );
  }
}

export default SingleBook;
