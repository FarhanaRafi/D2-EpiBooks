import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    isLoading: true,
  };

  //   fetchComments = async () => {
  //     try {
  //       let response = await fetch(
  //         "https://striveschool-api.herokuapp.com/api/comments/" +
  //           this.state.elementId,

  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
  //           },
  //         }
  //       );
  //       console.log(response);
  //       if (response.ok) {
  //         let data = await response.json();
  //         this.setState({
  //           comment: data,
  //         });
  //       } else {
  //         alert("problem");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   componentDidMount() {
  //     this.fetchComments();
  //   }

  render() {
    return (
      <>
        <CommentsList comments={this.state.comments} asin={this.props.asin} />
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default CommentArea;
