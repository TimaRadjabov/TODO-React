import "./filter.css";

const Filter = () => {
  return (
    <div className="filter">
        <div className="btn-group">
      <button className="btn btn-light" type="button">All employees</button>
      <button className="btn btn-outline-light" type="button">For promotion</button>
      <button className="btn btn-outline-light" type="button">With a big salary</button>
    </div>
    </div>
  );
};
export default Filter;