'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '@/context/AuthContext'

const Signin = () => {
    const router = useRouter();
  const { user, login } = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(data.email, data.password)
      localStorage.setItem('name', data.email);
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (

    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
    >
      <h1 className="text-3xl font-semibold mb-8">Login</h1>
      <div className="w-80">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="sr-only">Email address</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Email address"
              className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="sr-only">Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
              className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500 block w-full"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </Button>
        </Form>
      </div>
      {/* <p className="mt-6 text-center text-gray-400">
        Not a member?{' '}
        <button onClick={() => router.push('signup')} className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
          Sign Up
        </button>
      </p> */}
    </div>





  )
}

export default Signin