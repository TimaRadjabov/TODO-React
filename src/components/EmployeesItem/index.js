import { Component } from "react";
import "./employeesItem.css";

class EmployeesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      star: false,
    };
  }
  toggleIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };
  toggleStar = () => {
    this.setState(({ star }) => ({
      star: !star,
    }));
  };

  render() {
    let { name, salary, onDelete } = this.props;
    let { increase, star } = this.state;
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if (star) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.toggleStar}>
          {name}
        </span>
        <input
          type="text"
          defaultValue={salary + "$"}
          className="list-group-item-input"
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn-cookie btn-sm"
            type="button"
            onClick={this.toggleIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>
          <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesItem;
