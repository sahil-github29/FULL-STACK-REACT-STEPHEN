/* SurveyNew component => shows SurveyForm and SurveyFormReview components */
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "../surveyForm";
import SurveyFormReview from "../surveyFormReview";

class SurveyNew extends Component {
  state = {
    showFormReview: false
  };
  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    /* onSurveySubmit => is a callback and will be called once the form is submit successfully */
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
