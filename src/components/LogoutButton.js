import React from 'react'
import { Button } from 'reactstrap'
import { removeUserFromSession } from '../user/user'
import { logout } from '../redux/actions/authenticationActions'
import { connect } from 'react-redux'

const LogoutButton = ({
  session,
  dispatch
}) => {

  const handleLogout = (user) => {
    console.log(user)
    removeUserFromSession(user)
    dispatch(logout())
  }

  return (
    <Button onClick={() => handleLogout(session.localUser)}>Log Out</Button>
  )

}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(LogoutButton)
