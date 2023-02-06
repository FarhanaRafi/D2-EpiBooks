import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    selectedBookAsin: this.props.selectedBook,
    isLoading: true,
    comments: [],
  };

  fetchComments = async () => {
    console.log(this.state.selectedBookAsin, "comment area");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.state.selectedBookAsin,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        this.setState({
          isLoading: false,
          comments: data,
        });
      } else {
        alert("problem");
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props, prevProps);

    if (this.props.book !== prevProps.book) {
      this.setState({ selectedBookAsin: this.props.book });
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="bg-white">
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}
        <CommentsList
          comments={this.state.comments}
          asin={this.props.asin}
          key={this.props.asin}
        />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
