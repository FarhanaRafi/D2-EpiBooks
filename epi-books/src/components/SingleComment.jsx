import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import StarRatings from "react-star-ratings";

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

    if (!res.ok) {
      alert("problem");
    }
  };
  render() {
    return (
      <ListGroup.Item key={this.props.comment._id}>
        <strong className="text-danger">{this.props.comment.author}</strong>{" "}
        <br />
        {this.props.comment.comment}
        <br></br>
        {/* Rating: {this.props.comment.rate} */}
        <StarRatings
          rating={this.props.comment.rate}
          numberOfStars={5}
          name="rating"
          starDimension="15px"
          starRatedColor="red"
        />
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
