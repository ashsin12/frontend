import React, { Component } from "react";
import axios from "axios";

class AddReview extends Component {
  state = {
    review: {
              reviewId:0,
              comment:"",
              headline:"",
              rating: "",
              reviewOn:" ",
              },
    books:[]
  };
  handleChange = (e) => {
    const review = { ...this.state.review };
    review[e.target.name] = e.target.value;
    this.setState({ review: review });
  // this.setState({ review });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8082/reviews`, this.state.review)
      .then(() => {
        this.props.history.push("/reviews");
      });
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8082/books`)
      .then((response) => {
        console.log(response);
        this.setState({ books:response.data });
      });
  }
  render() {
    //console.log(response);
    return (
      <div>
        <div className="container">
          <div>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-cener">Add Review</h2>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Comment</label>
                    <input
                      placeholder="write it"
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
                      placeholder="rate it (1 to 5)"
                      className="form-control"
                      name="rating"
                      value={this.state.review.rating}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* <div className="form-group">
                  <label>Title of book</label>
                  <input 
                     placeholder="title of book"   
                     className="form-control"
                     name="title"
                     value={this.state.books.title}
                    //  onChange={(reponse) => this.handleCities(reponse)}
                    //  {Cities.cities && Cities.cities.map((reponse, key) => {   
                    //   return <option key={key} value={e.Key}>{e.Value}</option>; })}
                   />
                   </div> */}
  
                   
                  
                  <button type="submit" class="btn btn-primary">
                    Submit
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

export default AddReview;











