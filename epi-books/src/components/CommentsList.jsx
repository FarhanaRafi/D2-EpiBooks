import { Component } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
// import { AiFillDelete } from "react-icons/ai";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {
    comment: [],
    elementId: this.props.asin,
    isLoading: true,
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.state.elementId,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        this.setState({
          comment: data,
          isLoading: false,
        });
      } else {
        alert("problem");
      }
    } catch (err) {
      console.log(err);
    }
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

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    console.log("loading", this.props.comment);
    return (
      <>
        {this.state.isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        <ListGroup>
          {this.state.comment.map((c) => {
            return <SingleComment comment={c} />;
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
