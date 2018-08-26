import React from "react";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  className,
  value,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        value={value}
        error={error}
        info={info}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
