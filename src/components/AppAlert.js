import React from 'react'
import { Alert } from 'reactstrap'
import { connect } from 'react-redux'

const AppAlert = ({
  visible,
  message,
  error
}) => {
  console.log('APP ALERT')
  console.log(visible, error, message)
  if (visible) {
    if (error) {
      return (
        <div>
          <Alert color='danger'>
            {message}
          </Alert>
        </div>
      )
    } else {
      return (
        <div>
          <Alert color='success'>
            {message}
          </Alert>
        </div>
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
