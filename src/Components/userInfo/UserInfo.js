import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth/authActions";
import { NavigationContainer } from "../header/navigation/NavigationStyled";

const UserInfo = ({ email, isAuth, logOut }) => {
  return (
    <>
      <NavigationContainer>
        <div className="userInfo">
        <p  className="userItem">{email}</p>
      {isAuth && ( 
        <button className="userBtn" type="button" onClick={() => logOut()}>
          LogOut
        </button>
      )}
      </div>
      </NavigationContainer> 
    </>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.token.email,
    isAuth: state.auth.token.idToken
  };
};

export default connect(
  mapStateToProps,
  { logOut }
)(UserInfo);
