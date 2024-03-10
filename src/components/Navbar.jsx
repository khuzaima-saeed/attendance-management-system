
'use client'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>NextJS Firebase Auth</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <div>
                <Nav.Link
                  onClick={() => {
                    logout()
                    router.push('/signin')
                  }}
                >
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                {/* <Link href="/signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link> */}
                <Link href="/signup">
                    <button>Signup</button>
                </Link>
                <Link href="/signin">
                    <button>Login</button>
                </Link>
                {/* <Link href="/signin" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link> */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp