import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Layout({ handleLogout }) {
    const [user, setUser] = useState(null);

    const loggedInUser = sessionStorage.getItem('user');
    if (loggedInUser && !user) {
        setUser(loggedInUser);
    }


    const handleLogoutClick = () => {

        sessionStorage.removeItem('user');

        setUser(null);
        handleLogout();
    };

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/home">Job Search App</Navbar.Brand>
                    {user ? (
                        <>
                            <Nav.Link href="/home" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="/about" style={{ color: 'white' }}>About</Nav.Link>
                            <Nav.Link href="/jobs" style={{ color: 'white' }}>Jobs</Nav.Link>
                            <Nav.Link href="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
                            <Nav.Link href="/company" style={{ color: 'white' }}>Companies</Nav.Link>
                            <Nav.Link href="/login" onClick={handleLogoutClick} style={{ color: 'white' }}>Logout</Nav.Link>
                        </>
                    ) : (
                        <Nav.Link href="/login" style={{ color: 'white' }}>Login</Nav.Link>
                    )}
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default Layout;
