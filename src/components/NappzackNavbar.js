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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const NappzackNavbar = ({ toggleUserButton, user, handleLogout }) => {
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
        {user ? <Button onClick={handleLogout}>Log Out</Button> : <Button onClick={toggleUserButton} color='primary'>{buttonText()}</Button>}
        {user ? <p>user: {user.name}</p> : null}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='home'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='user_notes'>User Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='socketTests'>Socket Tests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='total_notes'>Total Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='total_users'>Total Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='current_logged_users'>Current Logged In Users</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NappzackNavbar;
