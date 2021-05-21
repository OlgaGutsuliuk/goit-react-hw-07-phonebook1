import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logOut } from "../../../redux/auth/authActions";
import mainRoutes from "../../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location, logOut }) => {
  return (
    
    <NavigationContainer>
      <ul className="list">
        {mainRoutes.map(item => (
          <li className="listItem" key={item.path}>
            <NavLink
              to={{
                pathname: item.path,
                state: {
                  from: location.pathname
                }
              }}
              className="link"
              activeClassName="activeLink"
              exact={item.exact}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <li>
          <button type="button" onClick={()=>logOut()}>
            LogOut
          </button>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default connect(null, {logOut})(withRouter(Navigation));
