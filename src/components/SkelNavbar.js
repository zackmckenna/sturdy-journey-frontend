import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const SkelNavbar = ({
  toggleUserButton,
  handleLogout,
  session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const buttonText = () => {
    if (toggleUserButton) {
      return 'Create New'
    } else {
      return 'cancel'
    }
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">devbar</NavbarBrand>
        {session.localUser ? <NavLink tag={Link} to='home'><Button onClick={() => handleLogout(session.localUser)}>Log Out</Button></NavLink>
 : <Button onClick={toggleUserButton} color='primary'>{buttonText()}</Button>}
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
    session: state.session
  }
}

const mapDispatchToProps = {
  handleLogout: (user) => (removeUserFromSession(user))
}

export default connect(mapStateToProps, mapDispatchToProps)(SkelNavbar);
