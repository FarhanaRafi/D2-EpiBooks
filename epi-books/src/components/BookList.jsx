import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import items from "../book/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    query: "",
    books: items,
  };

  filterBookList = (e) => {
    e.preventDefault();
    let booksFiltered = items.filter((item) => {
      return item.title.toLowerCase().includes(this.state.query.toLowerCase());
    });
    this.setState({ books: booksFiltered });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.filterBookList}>
          <Form.Group className="col-6">
            <Form.Label>
              <strong className="heading">Search Books</strong>
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter Name of the Book"
              value={this.state.query}
              onChange={(e) => {
                e.preventDefault();
                console.log(e.target.value);
                this.setState({ query: e.target.value });
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="ml-3">
            Submit
          </Button>
        </Form>
        <Container>
          <h2 className="text-center display-5">
            <strong className="heading">Books</strong>
          </h2>
          <Row className="mt-3">
            {this.state.books.map((item) => {
              return (
                <Col xs={6} md={4} lg={3}>
                  <SingleBook
                    book={item}
                    selectBook={this.props.selectBook}
                    key={item.asin}
                  />
                  ;
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
