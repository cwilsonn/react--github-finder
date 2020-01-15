import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3">
      <div className="card border-0 shadow-sm p-4">
        <img
          className="rounded-circle card-img-top h-50 w-50 mx-auto mb-2"
          src={avatar_url}
          alt=""
        />
        <h2 className="card-title text-center mb-3 h4">{login}</h2>
        <Link className="btn btn-outline-primary" to={`/user/${login}`}>
          See User
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
