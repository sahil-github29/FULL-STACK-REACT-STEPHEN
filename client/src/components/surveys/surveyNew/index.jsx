/* SurveyNew component => shows SurveyForm and SurveyFormReview components */
import React , {Component} from "react";
import SurveyForm from "../surveyForm";


class SurveyNew extends Component {
    render(){
        return <div><SurveyForm/></div>
    }
}

export default SurveyNew;