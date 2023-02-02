import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

class SingleComment extends Component {
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
    console.log("comment ", this.props.comment);
    return (
      <ListGroup.Item>
        {this.props.comment.comment}
        <br></br>Rating: {this.props.comment.rate}
        <Button
          variant="light"
          className="ml-5"
          onClick={(e) => {
            e.preventDefault();
            this.deleteComment(this.props.comment._id);
          }}
        >
          <AiFillDelete />
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
