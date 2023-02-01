import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import items from "../book/history.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    query: "",
    books: items,
  };

  filterBookList = (e) => {
    let booksFiltered = items.filter((item) => {
      return item.title.toLowerCase().includes(this.state.query);
    });
    this.setState({ books: booksFiltered });
  };

  render() {
    return (
      <Container>
        <Form
          onSubmit={(e) => {
            this.filterBookList.bind(this);
          }}
        >
          <Form.Group className="col-6">
            <Form.Label>
              <strong className="heading">Search Books</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name of the Book"
              value={this.state.query}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({ query: e.target.value });
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="ml-3"
            // onSubmit={(e) => {
            //   this.filterBookList.bind(this);
            // }}
          >
            Submit
          </Button>
        </Form>

        <h2 className="text-center display-5">
          <strong className="heading">Books</strong>
        </h2>
        <Row className="mt-3">
          {items.map((item) => {
            return (
              <Col xs={6} md={4} lg={3} key={item.asin}>
                <SingleBook book={item} />;
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
