import { Component } from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 20px 0;
  background-color: rgb(173, 109, 36);
  border-radius: 4px;
`;

class Filter extends Component {
  onActive = (e) => {
    if (e.target.classList.contains("btn-light")) {
      e.target.classList.replace("btn-light", "btn-outline-light");
    }
  };

  render() {
    const btns = [
      {
        type: "button",
        children: "All employees",
        id: 1,
        name: "all",
      },
      {
        type: "button",
        children: "For promotion",
        id: 2,
        name: "rise",
      },
      {
        type: "button",
        children: "With a big salary",
        id: 3,
        name: "moreThan1000",
      },
    ];
    const btn = btns.map((item) => {
      const active = item.name === this.props.filter;
      const activeClass = active ? " btn-light" : " btn-outline-light";
      return (
        <button
          key={item.id}
          className={"btn " + activeClass}
          type={item.type}
          name={this.name}
          onClick={() => this.props.onSelectFilter(item.name)}
        >
          {item.children}
        </button>
      );
    });
    return (
      <FilterWrapper>
        <div className="btn-group">{btn}</div>
      </FilterWrapper>
    );
  }
}
export default Filter;
