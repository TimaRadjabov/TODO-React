import { Component } from "react";
import nextId from "react-id-generator";
import styled from "styled-components";

import Header from "../Header";
import EmployeesStatistic from "../EmployeesStatistic";
import Searching from "../Searching";
import Filter from "../Filter";
import EmployeesList from "../EmployeesList";
import EmployeesAddForm from "../EmployeesAddForm";
import Footer from "../Footer";

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .content__page {
    flex: 1 1 auto;
    background-color: rgb(173, 109, 36);
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "John", salary: 1000, increase: true, rise: false },
        { id: 2, name: "Alex", salary: 800, increase: false, rise: false },
        { id: 3, name: "Michael", salary: 1500, increase: false, rise: false },
      ],
      term: "",
      filter: "all",
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
      rise: false,
      id: nextId(),
    };
    if (newEmployee.name.length < 3 || newEmployee.salary.length < 2) {
      return null;
    }

    this.setState(({ data }) => {
      return {
        data: [...data, newEmployee],
      };
    });
  };
  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, increase: !item.increase };
          }
          return item;
        }),
      };
    });
  };
  onToggleRise = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, rise: !item.rise };
          }
          return item;
        }),
      };
    });
  };

  onSearch = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  onSearching = (term) => {
    this.setState({ term });
  };
  onFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  onSelectFilter = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const numberOfEmployees = data.length;
    const numberOfRise = data.filter((item) => {
      if (item.rise === true) {
        return item;
      }
    });
    const showData = this.onFilter(this.onSearch(data, term), filter);
    return (
      <Wrapper>
        <Header />
        <div className="content__page">
          <EmployeesStatistic
            numberOfEmployees={numberOfEmployees}
            numberOfRise={numberOfRise}
          />
          <Searching onSearching={this.onSearching} />
          <Filter filter={filter} onSelectFilter={this.onSelectFilter} />
          <EmployeesList
            data={showData}
            onDelete={this.onDelete}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
          />
          <EmployeesAddForm onAdd={this.onAdd} />
        </div>
        <Footer />
      </Wrapper>
    );
  }
}
export default App;
