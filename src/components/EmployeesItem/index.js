import "./employeesItem.css";

const EmployeesItem = (props) => {
  let {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
  } = props;
  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }
  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
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
          onClick={onToggleIncrease}
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
};

export default EmployeesItem;
