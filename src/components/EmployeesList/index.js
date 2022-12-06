import EmployeesItem from "../EmployeesItem";
import "./employeesList.css";

const EmployeesList = ({ data, onDelete, onAdd }) => {
  const elem = data.map((item) => {
    const { id, ...otherItems } = item;
    return (
      <EmployeesItem
        key={id}
        {...otherItems}
        onDelete={() => onDelete(id)}
        onAdd={() => onAdd(...otherItems)}
      />
    );
  });

  return <ul className="app-list list-group">{elem}</ul>;
};

export default EmployeesList;
