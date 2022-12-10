import { Component } from "react";
import styled from "styled-components";



const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: rgb(173, 109, 36);
  color: #fff;
  input {
    width: 350px;
    margin-right: 20px;
  }
`;
const AddForm = styled.form`
  margin-top: 20px;
`;
class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    let { name, salary } = this.state;
    let { onAdd } = this.props;
    return (
      <WrapperForm>
        <h3>Добавьте нового сотрудника</h3>
        <AddForm onSubmit={onAdd}>
          <input
            type="text"
            placeholder="Как его зовут?"
            name="name"
            onChange={this.onValueChange}
            value={name}
          />
          <input
            type="number"
            placeholder="З/П в $?"
            name="salary"
            onChange={this.onValueChange}
            value={salary}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </AddForm>
      </WrapperForm>
    );
  }
}
export default EmployeesAddForm;
