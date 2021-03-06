import React, {Component} from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class Review extends Component {
  state = {
    review: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8082/reviews").then((res) => {
      console.log(res);
      this.setState({ review: res.data });
    });
  }
  render() {
    const { review } = this.state;

    return (
      <div>
        <h2>Review</h2>
        <div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">ReviewId</th>
                <th scope="col">Comment</th>
                <th scope="col">Headline</th>
                <th scope="col">Rating</th>
                <th scope="col">Review On</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {review.map((res) => (
                <tr key={res.reviewId}>
                  <th scope="row">{res.reviewId}</th>
                  <td>{res.comment}</td>
                  <td>{res.headLine}</td>
                  <td>{res.rating}</td>
                  <td>{res.reviewOn	}</td>
                  <td>
                    <Link to={`/reviews/${res.reviewId}`}>
                      <button
                        type="button"
                        className="bi bi-arrow-clockwise"
                      ></button>
                    </Link>
                    <Link to={`/reviews/${res.reviewId}`}>
                      <button
                        type="button"
                        className="bi bi-trash"
                      ></button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


  
  export default Review;