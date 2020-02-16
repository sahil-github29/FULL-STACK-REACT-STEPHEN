/* SurveyForm component => shows a form for a user to add input */
import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
//this reduxForm helper allows redux-form to communicate with our redux store
import { reduxForm, Field } from "redux-form";
import SurveyField from "../surveyField";
import validateEmails from "../../../utils/validateEmails";
import formFields from "../formFields";

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ name, label }) => (
      <Field
        key={name}
        name={name}
        label={label}
        component={SurveyField}
        type="text"
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "You must provide a value!";
    }
  });
  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
