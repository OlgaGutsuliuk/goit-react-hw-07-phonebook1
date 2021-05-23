import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import UserInfo from "../../userInfo/UserInfo";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location, isAuth }) => {
  return (
    <NavigationContainer>
      <nav className="nav">
       <ul className="list">
        {mainRoutes.map(item => (
          <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
        ))}
      </ul>
      {isAuth && <UserInfo />} 
      </nav>
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token.idToken
  };
};

export default connect(mapStateToProps)(withRouter(Navigation));
