import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../style/navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { connect } from 'react-redux'
import LogoutButton from './LogoutButton'

const SkelNavbar = ({
  toggles,
  session }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(toggles)

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand href="/">nappzack</NavbarBrand>
        {session.localUser ? <NavLink tag={Link} to='home'><LogoutButton /></NavLink>
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
              <NavLink tag={Link} to='how_to_play'>How To Play</NavLink>
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

export default connect(mapStateToProps)(SkelNavbar);
