import styled from "styled-components";

const Statistic = styled.div`
  padding: 25px 0;
  background-color: rgb(173, 109, 36);
  border-radius: 4px;
  color: #fff;
  text-align: center;
`;
const EmployeesStatistic = ({ numberOfEmployees, numberOfRise }) => {
  return (
    <Statistic>
      <h1 className="statistic__title">Accounting of company employees</h1>
      <h2>Total number of employees: {numberOfEmployees}</h2>
      <h2>Will receive a bonus: {numberOfRise.length}</h2>
    </Statistic>
  );
};

export default EmployeesStatistic;
