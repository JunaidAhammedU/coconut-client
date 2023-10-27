import React from 'react'
import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink,Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <img src="" className="mr-3 h-6 sm:h-9" alt="coconut." />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Link to={'/login'}><Dropdown.Item>Login</Dropdown.Item></Link>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to={'/'} className='naveList' href="#" active>Home</NavLink>
                <NavLink to={'/'} className='naveList' href="#" active>Recipes</NavLink>
                <NavLink to={'/'} className='naveList' href="#" active>Services</NavLink>
                <NavLink to={'/'} className='naveList' href="#" active>Pricing</NavLink>
                <NavLink to={'/'} className='naveList' href="#" active>Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header  