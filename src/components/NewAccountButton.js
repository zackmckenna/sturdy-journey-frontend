import React from 'react'

import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { toggleCreateUserForm } from '../redux/actionCreators'

const NewAccountButton = ({
  toggleCreateUserForm }) => {


  const handleClick = () => {
    toggleCreateUserForm(true)
  }

  return (
    <div className='text-center'>
      <Button onClick={() => handleClick()} color='link'>click here to create an account</Button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  session: state.session,
  toggles: state.toggles
})

const mapDispatchToProps = {
  toggleCreateUserForm: (data) => (toggleCreateUserForm(data))
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountButton)
