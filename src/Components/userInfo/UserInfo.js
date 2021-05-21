import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeartIcon from "../../shared/icons/HeartIcon/HeartIcon";

const UserInfo = ({ user, isAuth }) => {
  const { email } = user;
  return isAuth ? (
    <>
      <Link
        to="/wishlist"
        className="relative text-gray-700 hover:text-gray-600 "
      >
        <HeartIcon className="h-5 w-5" />
      </Link>
      <div>
        <strong>{email}</strong>
      </div>
    </>
  ) : null;
};

const mapStateToProps = (state) => ({
  isAuth: Boolean(state.auth.accessToken),
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(UserInfo);