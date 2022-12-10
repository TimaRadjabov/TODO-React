import styled from "styled-components";

import EmployeesItem from "../EmployeesItem";


const AppList = styled.ul`
  padding: 25px 0;
  background-color: rgb(173, 109, 36);
  border-radius: 4px;
  color: #fff;
  margin-bottom: 0;
`;
const EmployeesList = ({
  data,
  onDelete,
  onAdd,
  onToggleIncrease,
  onToggleRise,
}) => {
  const elem = data.map((item) => {
    const { id, ...otherItems } = item;
    return (
      <EmployeesItem
        key={id}
        {...otherItems}
        onDelete={() => onDelete(id)}
        onAdd={() => onAdd(...otherItems)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });

  return <AppList>{elem}</AppList>;
};

export default EmployeesList;
