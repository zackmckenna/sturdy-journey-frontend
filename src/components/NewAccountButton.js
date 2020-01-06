import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/navbar.css'

import { Button } from 'reactstrap';
import { connect } from 'react-redux'
import { toggleCreateUserForm } from '../redux/actionCreators'

const NewAccountButton = ({
  toggles,
  toggleCreateUserForm,
  session }) => {

  console.log(toggles)

  const handleClick = () => {
    toggleCreateUserForm(true)
  }

  return (
    <div className='text-center'>
         <Button onClick={() => handleClick()} color='link'>click here to create an account</Button>
    </div>
  );
}

const mapStateToProps = function(state) {
  return {
    session: state.session,
    toggles: state.toggles
  }
}

const mapDispatchToProps = {
  toggleCreateUserForm: (data) => (toggleCreateUserForm(data))
}

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountButton);
