import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const PageFooter = (props) => {
  return (
    <>
      <Nav className='footer'>
        <h4>
          nappzack
        </h4>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
    </>
  );
}

export default PageFooter;
