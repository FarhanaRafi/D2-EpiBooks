import { Component } from "react";
import AddComment from "./AddComment";
// import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    isLoading: true,
  };
  render() {
    return (
      <>
        <AddComment asin={this.props.asin} />
        {/* <CommentsList /> */}
      </>
    );
  }
}

export default CommentArea;
