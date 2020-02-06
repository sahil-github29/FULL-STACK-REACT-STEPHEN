import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "../payment";

const renderContent = auth => {
  switch (auth) {
    case null:
      return "Still deciding!";
    case false:
      return (
        <li>
          <a href="/auth/google">Login with google</a>
        </li>
      );
    default:
      return [
        <li key="1">
          <Payment />
        </li>,
        <li key="3" style={{ margin: "0 10px" }}>
          Credits : {auth.credits}
        </li>,
        <li key="2">
          <a href="/api/logout">Logout</a>
        </li>
      ];
  }
};

const Header = props => {
  console.log("props.auth => ");
  console.log(props.auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={props.auth ? "/surveys" : "/"} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">{renderContent(props.auth)}</ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
