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
import { removeUserFromSession } from '../redux/actionCreators'
import { toggleCreateUserForm } from '../redux/actionCreators'

const SkelNavbar = ({
  toggles,
  toggleCreateUserForm,
  handleLogout,
  session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(toggles)

  const buttonText = () => {
    if (toggles.showCreateUserForm) {
      return 'cancel'
    } else {
      return 'new user'
    }
  }

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">nappzack</NavbarBrand>
        {session.localUser ? <NavLink tag={Link} to='home'><Button onClick={() => handleLogout(session.localUser)}>Log Out</Button></NavLink>
 : null}
        {session.localUser ? <p>user: {session.localUser.name}</p> : null}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='game_lobby'>The Game Lobby</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='user_notes'>User Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='role_card'>Role Card</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
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
  handleLogout: (user) => (removeUserFromSession(user)),
  toggleCreateUserForm: (data) => (toggleCreateUserForm(data))
}

export default connect(mapStateToProps, mapDispatchToProps)(SkelNavbar);
