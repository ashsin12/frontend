import React, {Component} from "react";

import axios from "axios";
import { Link } from "react-router-dom";

class Address extends Component {
  state = {
    address: [],
  };
  componentDidMount() {
    axios.get("http://localhost:8082/address").then((res) => {
      console.log(res);
      this.setState({ address: res.data });
    });
  }

  handleDelete = (addressId) => {
    axios
      .delete(`http://localhost:8082/address/${addressId}`)
      .then((res) => {
        const address = this.state.address.filter(
          (p) => p.addressId !== addressId
        );
        this.setState({ address: address });
        this.props.history.push("/address");
      });
  };
  render() {
    const { address } = this.state;
    return (
        

        <div>  
        <h2>Address</h2>
        <div>
            <div>
            <Link to="/addaddress">
            <button
              type="button"
              className=" "
              >ADD ADDRESS</button>
            </Link>
            </div>
            
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">AddressId</th>
                <th scope="col">Street</th>
                <th scope="col">city</th>
                <th scope="col">country</th>
                <th scope="col">pincode </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {address.map((res) => (
                <tr key={res.addressId}>
                  <th scope="row">{res.addressId}</th>
                  <td>{res.street}</td>
                  <td>{res.city}</td>
                  <td>{res.country}</td>
                  <td>{res.pincode	}</td>
                  <td>
                    <Link to={`/updateaddress/${res.addressId}`}>
                      <button
                        type="button"
                        className="bi bi-arrow-clockwise"

                      ></button>
                    </Link>
                      <button
                        type="button"
                        className="bi bi-trash"
                        onClick={() => this.handleDelete(res.addressId)}
                      ></button>
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


  
  export default Address;