import { Component } from "react";
import { ListGroup, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {
    comments: this.props.comments,
    elementId: this.props.asin,
    isLoading: true,
    isError: false,
  };

  deleteComment = async (commentId) => {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + commentId,

      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
        },
      }
    );
    console.log(res);
  };

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error!</Alert>
        )}

        <h5 className="text-center pt-2 review ">Reviews</h5>
        {this.state.comments ? (
          <ListGroup>
            {this.props.comments.map((c) => {
              return <SingleComment comment={c} />;
            })}
          </ListGroup>
        ) : (
          <p>No Comments</p>
        )}

        {/* <ListGroup>
            {this.props.comments.map((c) => {
              return <SingleComment comment={c} />;
            })}
          </ListGroup> */}
      </>
    );
  }
}

export default CommentsList;
