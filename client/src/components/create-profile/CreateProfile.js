import React from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "./../common/TextFieldGroup";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";
import SelectListGroup from "./../common/SelectListGroup";
import InputGroup from "./../common/InputGroup";

const CreateProfile = ({ submitProfile }) => {
  const options = [
    { label: "* Select Professional Status", value: 0 },
    { label: "Developer", value: "Developer" },
    { label: "Junior Developer", value: "Junior Developer" },
    { label: "Senior Developer", value: "Senior Developer" },
    { label: "Manager", value: "Manager" },
    { label: "Student or Learning", value: "Student or Learning" },
    { label: "Instructor or Teacher", value: "Instructor or Teacher" },
    { label: "Intern", value: "Intern" },
    { label: "Other", value: "Other" }
  ];
  return (
    <div id="createProfileContainer">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Let's get some information to make your profile stand out!
            </p>
            <small className="d-block pb-3">* = required fields</small>
            <form
              onSubmit={e => {
                e.preventDefault();
                submitProfile(e);
              }}
            >
              <TextFieldGroup
                placeholder={"* Profile Handle"}
                name="handle"
                label="handle"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"insert Redux errors "}
                info="A unique handle for your profile URL. Your full name, company name, nickname, etc"
              />
              <SelectListGroup
                placeholder="Status"
                name="status"
                errors={"insert Redux errors"}
                info="Give us an idea of where you are at in your career"
                options={options}
              />
              <input type="submit" value="submit!" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  submitProfile: PropTypes.func
};

export default CreateProfile;
