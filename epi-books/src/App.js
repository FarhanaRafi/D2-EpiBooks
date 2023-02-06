import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
// import AllTheBooks from "./components/AllTheBooks";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    review: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
    selectedBook: null,
  };

  changeAppState = (book) => {
    console.log(book);
    this.setState({ review: book, selectedBook: book.asin });
  };

  render() {
    return (
      <div className="body-container">
        <MyNav genre="Fantasy" />
        <Welcome />
        <Container>
          <Row>
            <Col xs={9}>
              <BookList
                selectedValueFromApp={this.state.review.elementId}
                selectBook={this.changeAppState}
              />
            </Col>
            <Col xs={3} className="mt-5 form-container">
              <CommentArea book={this.state.selectedBook} />
            </Col>
            {/* <AllTheBooks /> 
          asin={this.state.asin}*/}
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
