/* SurveyForm component => shows a form for a user to add input */
import React , {Component} from "react";

//this reduxForm helper allows redux-form to communicate with our redux store
import {reduxForm, Field} from "redux-form";
import SurveyField from "../surveyField";

class SurveyForm extends Component {

    renderFields(){
        return (
            <div>
                <Field name="title" type="text" component={SurveyField} />
            </div>
        ) 
    }

    render(){
        return <div>
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()}
            <button type="submit">Submit</button>
            </form>
        </div>
    }
}

export default reduxForm({
     form:'surveyForm'
})(SurveyForm);
