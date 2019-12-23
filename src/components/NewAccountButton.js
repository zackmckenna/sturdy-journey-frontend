import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/navbar.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { connect } from 'react-redux'
import { toggleCreateUserForm } from '../redux/actionCreators'

const NewAccountButton = ({
  toggles,
  toggleCreateUserForm,
  session }) => {

  console.log(toggles)

  return (
    <div>
         <Button onClick={() => toggleCreateUserForm()} color='link'>click here to create an account</Button>
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
