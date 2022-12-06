import { Component } from "react";
import nextId from "react-id-generator";

import Header from "../Header";
import EmployeesStatistic from "../EmployeesStatistic";
import Searching from "../Searching";
import Filter from "../Filter";
import EmployeesList from "../EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm";
import Footer from "../Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "John", salary: 1000, increase: true },
        { id: 2, name: "Alex", salary: 800, increase: true },
        { id: 3, name: "Michael", salary: 1500, increase: false },
      ],
      maxId: 4,
    };
  }
  onDelete = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  onAdd = (e) => {
    e.preventDefault();
    let newEmployee = {
      name: e.target.name.value,
      salary: e.target.salary.value,
      increase: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      return {
        data: [...data, newEmployee],
      };
    });
  };
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content__page">
          <EmployeesStatistic />
          <Searching />
          <Filter />
          <EmployeesList data={this.state.data} onDelete={this.onDelete} />
          <EmployeesAddForm onAdd={this.onAdd} />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
