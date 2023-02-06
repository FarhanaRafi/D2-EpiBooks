import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  sendComment = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          method: "POST",
          body: JSON.stringify(this.state.review),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzQ1ZmU3MzczODAwMTUzNzQzNzgiLCJpYXQiOjE2NzUzMzkzNzAsImV4cCI6MTY3NjU0ODk3MH0.RUaBHf7ZH16daFuEprgMywAxgYfNSr4yqo2KY8XjYRM",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      if (response.ok) {
        this.setState({
          review: {
            comment: "",
            rate: 1,
          },
        });
      } else {
        alert("problem");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Form
        className="px-4 form1"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form is submitting...", e);
          this.sendComment();
        }}
      >
        <Form.Group>
          <Form.Label>
            <strong>Add a Comment</strong>
          </Form.Label>
          <Form.Control
            as="textarea"
            className="bg-secondary text-white"
            rows={3}
            value={this.props.selectedValueFromApp}
            // value={this.state.review.comment}
            onChange={(e) => {
              console.log(e, "event");
              e.preventDefault();
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            className="bg-secondary text-white"
            as="select"
            value={this.props.selectedValueFromApp}
            // value={this.state.review.rate}
            onChange={(e) => {
              e.preventDefault();

              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" className="mb-3 ml-5">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
