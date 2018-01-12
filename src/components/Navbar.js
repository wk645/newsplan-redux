import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
	return (

		<Menu secondary>
        <Menu.Item as={NavLink} to='/' exact name='Home' onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/news' exact name='News' onClick={this.handleItemClick} />
      </Menu>

	)
}

export default Navbar