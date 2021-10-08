import React, { Component } from "react";
import axios from "axios";

class AddAddress extends Component {
  state = {
    address: {
      addressId: "",
      street: "",
      city: "",
      pincode: "",
      country:" ",
    },
  };
  handleChange = (e) => {
    const address = { ...this.state.address };
    address[e.target.name] = e.target.value;
    this.setState({ address: address });
    this.setState({ address });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/address", this.state.address)
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
              <h2 className="text-cener">Add Address</h2>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                    <label>Street</label>
                    <input
                      placeholder="street"
                      className="form-control"
                      name="street"
                      value={this.state.address.street}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      placeholder="city"
                      className="form-control"
                      name="city"
                      value={this.state.address.city}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Pincode</label>
                    <input
                      placeholder="pincode"
                      className="form-control"
                      name="pincode"
                      value={this.state.address.pincode}
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

export default  AddAddress;

