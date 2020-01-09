import React from 'react'
import { Alert } from 'reactstrap'
import { connect } from 'react-redux'

const AppAlert = ({
  visible,
  message,
  error
}) => {
  if (visible) {
    if (error) {
      return (
        <Alert color='danger'>
          {message}
        </Alert>
      )
    } else {
      return (
        <Alert color='success'>
          {message}
        </Alert>
      )
    }
  }
  return null
}

const mapStateToProps = state => {
  return {
    visible: state.notification.visible,
    message: state.notification.message,
    error: state.notification.error,
    success: state.notification.success
  }
}

export default connect(mapStateToProps)(AppAlert)
