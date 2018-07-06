import React, { Component } from 'react'

import { connect } from 'react-redux'

import Login from '../../components/Login'

import { loginRequest } from '../../actions/LoginActions'

class LoginContainer extends Component {
  render() {
    return (
      <Login
        handleClick={this.props.onLoginRequest}
        isLoading={this.props.session.isLoading}
      />
    )
  }
}

const mapDispatchtoProps = dispatch => ({
  onLoginRequest: () => dispatch(loginRequest()),
})

const mapStatetoProps = state => ({
  session: state.session,
})

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(LoginContainer)
