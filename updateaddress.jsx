import React, { Component } from "react";
import axios from "axios";

class Updateaddress extends Component {
  state = {
    address: {
      addressId: "",
      street:"",
      city: "",
      country: "",
      pincode: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8082/address/${this.props.match.params.addressId}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ address: res.data });
      });
  }
  handleChange = (e) => {
    const address = { ...this.state.address };
    address[e.target.name] = e.target.value;
    this.setState({ address: address });
    this.setState({ address });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8082/address/${this.props.match.params.addressId}`,
        this.state.address
      )
      .then(() => {
        this.props.history.push("/address");
      });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-cener">Update Address</h2>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>street</label>
                    <input
                      placeholder="street"
                      className="form-control"
                      name="street"
                      value={this.state.address.street}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>city</label>
                    <input
                      placeholder="city"
                      className="form-control"
                      name="city"
                      value={this.state.address.city}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      placeholder="country"
                      className="form-control"
                      name="country"
                      value={this.state.address.country}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>pincode</label>
                    <input
                      placeholder="pincode"
                      className="form-control"
                      name="pincode"
                      value={this.state.address.pincode}
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

export default Updateaddress;