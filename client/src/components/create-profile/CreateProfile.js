import React from "react";
import PropTypes from "prop-types";
import TextFieldGroup from "./../common/TextFieldGroup";
import TextAreaFieldGroup from "./../common/TextAreaFieldGroup";
import SelectListGroup from "./../common/SelectListGroup";
import InputGroup from "./../common/InputGroup";

const CreateProfile = ({ submitProfile, errors }) => {
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

  const socialInputs = (
    <div>
      <InputGroup
        placeholder="Twitter Profile URL"
        name=""
        icon="fab fa-twitter"
        value={"twitter"}
        onChange={e => console.log(e)}
        error={"errors.twitter"}
      />
      <InputGroup
        placeholder="Facebook Page URL"
        name=""
        icon="fab fa-facebook"
        value={"facebook"}
        onChange={e => console.log(e)}
        error={"errors.facebook"}
      />
      <InputGroup
        placeholder="LinkedIn Profile URL"
        name=""
        icon="fab fa-linkedin"
        value={"linkedin"}
        onChange={e => console.log(e)}
        error={"errors.linkedin"}
      />
      <InputGroup
        placeholder="Youtube Channel URL"
        name=""
        icon="fab fa-youtube"
        value={"youtube"}
        onChange={e => console.log(e)}
        error={"errors.youtube"}
      />
      <InputGroup
        placeholder="Instagram Page URL"
        name=""
        icon="fab fa-instagram"
        value={"instagram"}
        onChange={e => console.log(e)}
        error={"errors.instagram"}
      />
    </div>
  );

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
                className="form-control form-control-lg"
                label="handle"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"insert Redux errors "}
                info="A unique handle for your profile URL. Your full name, company name, nickname, etc"
              />
              <SelectListGroup
                placeholder="Status"
                className="form-control form-control-lg"
                name="status"
                value={"status of user object"}
                errors={"errors.status"}
                info="Give us an idea of where you are at in your career"
                options={options}
              />
              <TextFieldGroup
                placeholder={"Company"}
                name="company"
                className="form-control form-control-lg"
                label="company"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.company"}
                info="Could be your own company or one you work for"
              />
              <TextFieldGroup
                placeholder={"Website"}
                name="website"
                className="form-control form-control-lg"
                label="website"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.website"}
                info="Could be your own website or your company's"
              />
              <TextFieldGroup
                placeholder={"Location"}
                name="location"
                className="form-control form-control-lg"
                label="location"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.location"}
                info="City or city & state suggested (eg. Boston, MA)"
              />
              <TextFieldGroup
                placeholder={"Skills"}
                name="skills"
                className="form-control form-control-lg"
                label="skills"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.skills"}
                info="Please user comma separated values"
              />
              <TextFieldGroup
                placeholder={"GitHub Username"}
                name="githubUsername"
                className="form-control form-control-lg"
                label="githubUsername"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.githubUsername"}
                info="If you want your latest repos and a GitHub link, include your username"
              />
              <TextAreaFieldGroup
                placeholder={"Short Bio"}
                name="bio"
                className="form-control form-control-lg"
                label="bio"
                value={"insert Redux handle value"}
                onChange={() => console.log("its changing!")}
                error={"errors.bio"}
                info="Tell us a little about yourself"
              />
              <div className="mb-3">
                <button
                  className="btn btn-light"
                  onClick={() => {
                    //some action fires to toggle Boolean
                    console.log;
                  }}
                >
                  Add Social Network Links
                </button>
                <span className="text-muted">Optional</span>
              </div>
              <input
                type="submit"
                value="Submit!"
                className="btn btn-info btn-block mt-4"
              />
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
