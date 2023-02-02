import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";
import { Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    isLoading: true,
    comments: [],
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,

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

  render() {
    return (
      <div className="bg-white">
        {this.state.isLoading && (
          <Spinner animation="border" variant="success" />
        )}
        <CommentsList comments={this.state.comments} asin={this.props.asin} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
