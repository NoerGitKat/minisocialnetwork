import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  className,
  value,
  icon,
  error,
  type,
  onChange,
  disabled
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        error={error}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
