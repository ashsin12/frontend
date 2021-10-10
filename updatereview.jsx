import React, { Component } from "react";
import axios from "axios";

class UpdateReview extends Component {
  state = {
    review: {
      reviewId: "",
      Comment: "",
      Headline: "",
      rating: 0.0,
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8082/review/${this.props.match.params.reviewId} `
      )
      .then((res) => {
        console.log(res);
        this.setState({ review: res.data });
      });
  }
  handleChange = (e) => {
    const review = { ...this.state.review };
    review[e.target.name] = e.target.value;
    this.setState({ review: review });
    this.setState({ review });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8082/review/${this.props.match.params.reviewId} `,
        this.state.review
      )
      .then((res) => {
        console.log(res.data);
        alert("Updated User successfully!!");
        this.props.history.push("/reviews");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-cener">Update Review</h2>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                 
                  <div className="form-group">
                    <label>Comment</label>
                    <input
                      placeholder="Comment"
                      className="form-control"
                      name="comment"
                      value={this.state.review.comment}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>HeadLine</label>
                    <input
                      placeholder="headline"
                      className="form-control"
                      name="headline"
                      value={this.state.review.headline}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Rating</label>
                    <input
                      placeholder="rating"
                      className="form-control"
                      name="rating"
                      value={this.state.review.rating}
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateReview;