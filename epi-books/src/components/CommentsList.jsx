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

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error!</Alert>
        )}

        <h5 className="text-center mt-5 review text-danger">
          <strong>Reviews</strong>{" "}
        </h5>
        <ListGroup>
          {this.props.comments.map((c) => {
            return <SingleComment refresh={this.props.refresh} comment={c} />;
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
