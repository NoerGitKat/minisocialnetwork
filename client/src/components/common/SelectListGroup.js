import React from "react";
import PropTypes from "prop-types";

const SelectListGroup = ({
  name,
  className,

  error,
  info,
  type,

  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="form-group">
      <select
        className={className}
        name={name}
        options={options}
        error={error}
        info={info}
        type={type}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

SelectListGroup.defaultProps = {
  type: "text"
};

export default SelectListGroup;
