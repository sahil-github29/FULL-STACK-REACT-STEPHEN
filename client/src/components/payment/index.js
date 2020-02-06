import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Payments extends Component {
  render() {
    /*
      name => Title at the header of the stripe popup
      description => This small a description in the stripe popup header
      amount => Amount of Money that we want to request from the user. 
                Deafult currency by stripe is US Dollar and accepts in "cents" 
      token => this is what we get back from stripe. This is a callback function 

      PublishableKey => this is our PublishableKey 
     */
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credit"
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credit</button>
      </StripeCheckout>
    );
  }
}
export default connect(null, actions)(Payments);
