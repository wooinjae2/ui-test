import { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aa: "The Products Page",
    };
  }

  componentDidMount() {
    console.log("asda");
  }

  render() {
    return (
      <div>
        <h2>{this.state.aa}</h2>
        <ul>
          <li><Link to="/products/p1">A Book</Link></li>
          <li><Link to="/products/p2">A Carpet</Link></li>
          <li><Link to="/products/p3">An Online Course</Link></li>
        </ul>
      </div>
    );
  }
}

export default Products;
