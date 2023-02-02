import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";

class CommentsList extends Component {
  state = {
    comment: [],
    elementId: this.props.asin,
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
    return (
      <ListGroup>
        {this.state.comment.map((c) => {
          return (
            <ListGroup.Item key={c._id}>
              {c.comment}
              <br></br>Rating: {c.rate}
              <Button
                variant="light"
                className="ml-5"
                onClick={(e) => {
                  e.preventDefault();
                  this.deleteComment(c._id);
                }}
              >
                <AiFillDelete />
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }
}

export default CommentsList;
