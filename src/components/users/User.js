import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <div className="row">
            <div className="col">
              <Link to="/" className="btn btn-light">
                <i className="fas fa-hand-point-left mr-2"></i>Back to Search
              </Link>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <img
                style={{ height: 160, width: 160 }}
                className="rounded-circle mx-auto mb-3"
                src={avatar_url}
                alt={`image of ${name}`}
              />
              <h1 className="mb-4">{name}</h1>
              {hireable ? (
                <p>
                  Hierable{" "}
                  <i className="fas fa-check-circle mr-2 text-success"></i>
                </p>
              ) : (
                <p>
                  Not hireable{" "}
                  <i className="fas fa-times-circle mr-2 text-danger"></i>
                </p>
              )}
              <ul className="list-unstyled">
                {login && (
                  <li>
                    <strong>Username:</strong> {login}
                  </li>
                )}
                {location && (
                  <li>
                    <strong>Location:</strong> {location}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company:</strong> {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website:</strong> {blog}
                  </li>
                )}
              </ul>
              <a href={html_url}>See {name}'s Github profile</a>
            </div>
            <div className="border-left col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 d-flex flex-column justify-content-center">
              <div className="form-group">
                {bio && (
                  <Fragment>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </Fragment>
                )}
              </div>
              <div className="form-group">
                <ul className="list-unstyled list-inline">
                  <li className="list-item">
                    <div className="font-weight-normal badge badge-primary">
                      Followers: {followers}
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="font-weight-normal badge badge-success">
                      Following: {following}
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="font-weight-normal badge badge-danger">
                      Public Repos: {public_repos}
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="font-weight-normal badge badge-dark">
                      Public Gists: {public_gists}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default User;
