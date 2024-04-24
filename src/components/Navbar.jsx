
'use client'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from 'react';
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/navigation'

const NavbarComp = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Link href="/" passHref>
    //       <Navbar.Brand>CardPay Attendance Manager</Navbar.Brand>
    //     </Link>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         {user ? (
    //           <div>
    //             <Nav.Link
    //               onClick={() => {
    //                 logout()
    //                 router.push('/signin')
    //               }}
    //             >
    //               Logout
    //             </Nav.Link>
    //           </div>
    //         ) : (
    //           <>
    //             {/* <Link href="/signup" passHref>
    //               <Nav.Link>Signup</Nav.Link>
    //             </Link> */}
    //             <Link href="/signup">
    //                 <button>Signup</button>
    //             </Link>
    //             <Link href="/signin">
    //                 <button>Login</button>
    //             </Link>
    //             {/* <Link href="/signin" passHref>
    //               <Nav.Link>Login</Nav.Link>
    //             </Link> */}
    //           </>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>


    // <nav className="bg-gray-800">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex items-center justify-between h-16">
    //       <div className="flex items-center">
    //         <Link href="/" passHref>
    //           <button className="text-white text-xl font-bold">CardPay Attendance Manager</button>
    //         </Link>
    //       </div>
    //       <div className="flex items-center">
    //         <div className="hidden md:block">
    //           <div className="ml-4 flex items-center md:ml-6">
    //             {user ? (
    //               <button
    //                 onClick={() => {
    //                   logout();
    //                   router.push('/signin');
    //                 }}
    //                 className="text-white"
    //               >
    //                 Logout
    //               </button>
    //             ) : (
    //               <>
    //                 <Link href="/signup">
    //                   <button className="text-white">Signup</button>
    //                 </Link>
    //                 <Link href="/signin">
    //                   <button className="ml-4 text-white">Login</button>
    //                 </Link>
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>


    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref>
              <button className="text-white text-xl font-bold">CardPay Attendance Manager</button>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    router.push('/signin');
                  }}
                  className="text-white bg-red-600 px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <>
                  {/* <Link href="/signup">
                    <button className="text-white">Signup</button>
                  </Link> */}
                  <Link href="/signin">
                    <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* Responsive Navbar Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={handleToggle} className="text-white text-lg focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-2 py-2 rounded-md space-y-1">
          {user ? (
            <button
              onClick={() => {
                logout();
                router.push('/signin');
              }}
              className="block text-center text-white bg-red-600 px-4 py-3 rounded-md w-full"
            >
              Logout
            </button>
          ) : (
            <>
              {/* <Link href="/signup">
                <button className="block text-white w-full">Signup</button>
              </Link> */}
              <Link href="/signin">
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default NavbarComp