import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    title: this.props.title,
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
    // console.log(this.props, prevProps);

    if (prevState.selectedBookAsin !== this.props.book) {
      this.setState({
        selectedBookAsin: this.props.book,
        title: this.props.title,
      });
      this.fetchComments();
    }
  }

  render() {
    console.log(this.props, "selected");
    return (
      <div className="bg-white sticky-top">
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}
        <h5 className="mb-n5 text-center pt-2">
          <strong>{this.state.title}</strong>
        </h5>
        <CommentsList
          comments={this.state.comments}
          asin={this.props.asin}
          key={this.props.asin}
          refresh={this.fetchComments}
        />
        <AddComment asin={this.props.book} refresh={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
