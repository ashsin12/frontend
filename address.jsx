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
  render() {
    const { address } = this.state;

    return (
      <div>
        <h2>Address</h2>
        <div>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">AddressId</th>
                <th scope="col">Addresses</th>
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
                  <td>{res.addresses}</td>
                  <td>{res.city}</td>
                  <td>{res.country}</td>
                  <td>{res.pincode	}</td>
                  <td>
                    <Link to={`/address/${res.addressId}`}>
                      <button
                        type="button"
                        className="bi bi-arrow-clockwise"
                      ></button>
                    </Link>
                    <Link to={`/address/${res.addressId}`}>
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


  
  export default Address;