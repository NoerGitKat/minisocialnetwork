import React from "react";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({ name, placeholder, className, error, info }) => {
  return (
    <div className="form-group">
      <textarea
        className={className}
        name={name}
        placeholder={placeholder}
        error={error}
        info={info}
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
  error: PropTypes.string,
  info: PropTypes.string
};

export default TextAreaFieldGroup;
